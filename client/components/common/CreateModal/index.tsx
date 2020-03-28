import React, {useState} from 'react';
import {IField} from "../../../forms/interfaces";
import Display from "./display";
import {validateField} from "../../../forms/validation";

export interface IStage {
    fields: IField[];
}

interface IProps {
    submitButtonText: string;
    stages: IStage[];
    close: () => any;
    save: (toSave: any, callback?: (saved: any) => any) => any;
    afterSave: (saved?: any) => any;
}

export default (props: IProps) => {
    const { stages } = props;

    const states = stages.reduce((acc, { fields }) => {
        fields.forEach(field => {
            const haveInitial = field.initial !== null && field.initial !== undefined;
            const [value, setter] = useState(haveInitial ? field.initial : '');
            const [error, errorSetter] = useState('');
            acc[field.key] = { value, setter, error, errorSetter };
        });
        return acc;
    }, {});

    const [submissionError, setSubmissionError] = useState('');
    const [currentStageIdx, setCurrentStageIdx] = useState(0);

    const onNext = () => {
        setCurrentStageIdx(currentStageIdx + 1);
    };

    const getFieldErrors = field => validateField(states[field.key].value, field.validators);

    const onSubmit = () => {
        let haveError = false;
        const toSave = {};
        for (const stage of stages) {
            for (const field of stage.fields) {
                const errors = getFieldErrors(field);
                if (errors.length) {
                    states[field.key].errorSetter(errors[0]);
                    haveError = true;
                }
                toSave[field.key] = field.getFinalValue
                    ? field.getFinalValue(states[field.key].value)
                    : states[field.key].value;
            }
        }
        if (haveError) {
            return;
        }
        props.save(toSave, saved => props.afterSave(saved));
    };

    return (
        <Display
            fields={stages[currentStageIdx].fields.map(field => {
                const { setter, value, error, errorSetter } = states[field.key];
                return {
                    field,
                    onChange: setter,
                    value,
                    error,
                    onLeave: () => errorSetter(getFieldErrors(field)[0] || ''),
                    clearError: () => errorSetter(''),
                };
            })}
            buttonText={props.submitButtonText}
            canSubmit={currentStageIdx === stages.length - 1}
            canBack={currentStageIdx > 0}
            canForward={currentStageIdx !== stages.length - 1}
            onBack={() => setCurrentStageIdx(currentStageIdx - 1)}
            onForward={() => setCurrentStageIdx(currentStageIdx + 1)}
            onSubmit={onSubmit}
            submissionError={submissionError}
            onClickForward={onNext}
            close={props.close}
        />
    );
};

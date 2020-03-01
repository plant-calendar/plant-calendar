import React, {useState} from 'react';
import {IField} from "../../../forms/interfaces";
import Display from "./display2";
import {validateField} from "../../../forms/validation";

interface IProps {
    stages: Array<{ fields: IField[] }>;
    close: () => any;
}

export default (props: IProps) => {
    const { stages } = props;

    const states = stages.reduce((acc, { fields }) => {
        fields.forEach(field => {
            const [value, setter] = useState(field.initial || '');
            const [error, errorSetter] = useState('');
            acc[field.key] = { value, setter, error, errorSetter };
        });
        return acc;
    }, {});
    const [justCreated, setJustCreated] = useState(false);
    const [submissionError, setSubmissionError] = useState('');
    const [currentStageIdx, setCurrentStageIdx] = useState(0);

    const onNext = () => {
        setCurrentStageIdx(currentStageIdx + 1);
    };

    const onSubmit = () => {

    };

    console.log({states});
    return (
        <Display
            fields={stages[currentStageIdx].fields.map(field => {
                const { setter, value, error, errorSetter } = states[field.key];
                return {
                    field,
                    onChange: setter,
                    value,
                    error,
                    onLeave: () => errorSetter(validateField(states[field.key].value, field.validators)),
                    clearError: () => errorSetter(''),
                };
            })}
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

import React, {useState} from "react";
import ReactModal from 'react-modal';

import {getFormErrorMessages, validatorGetters} from "../../../forms/validation";
import {IPlant} from "../../../../server/db/models/plant/plant.interface";
import {IField} from "../../../forms/interfaces";

interface ICreateModalProps {
    fields: IField[];
    create: (values: object, callback: any) => any;
    onCancel: () => any;
    afterCreate: (created?: object) => any;
}

export const CreateModal = (props: ICreateModalProps) => {
    const { fields } = props;
    const states = fields.reduce((acc, field: IField) => {
        const [value, setter] = useState(field.initial || '');
        acc[field.key] = { value, setter };
        return acc;
    }, {});
    const [submissionErrorMessage, setSubmissionErrorMessage] = useState('');
    const [justCreated, setJustCreated] = useState(false);

    const onClickCreate = () => {
        const values = Object.keys(states).reduce((vals, fieldKey) => {
            vals[fieldKey] = states[fieldKey].value;
            return vals;
        }, {});
        const errorMessages = getFormErrorMessages(fields, values);
        if (errorMessages && errorMessages.length) {
            setSubmissionErrorMessage(`There was a problem with your submission: \n${errorMessages.join('\n')}`);
        } else {
            props.create(
                Object.keys(states).reduce((objToCreate, fieldName) => {
                    objToCreate[fieldName] = states[fieldName].value;
                    return objToCreate;
                }, {}),
                createdResponse => {
                    setJustCreated(true);
                    setTimeout(() => props.afterCreate(createdResponse), 2000);
                },
            );
        }
    };

    const getOnChangeInput = stateSetter => event => stateSetter(event.target.value);
    return (
        <ReactModal isOpen>
                <div>
                    {
                        fields.map(({ label, key }) => {
                          return (
                              <div key={key} >
                                <label>
                                    {label}
                                    <input
                                        value={states[key].value}
                                        onChange={getOnChangeInput(states[key].setter)}
                                    />
                                </label>
                              </div>
                          );
                        })
                    }
                    {submissionErrorMessage.length ? (<div>{submissionErrorMessage}</div>) : null}
                    <button onClick={props.onCancel}>cancel</button>
                    <button onClick={onClickCreate}>create!</button>
                </div>
        </ReactModal>
    );
};


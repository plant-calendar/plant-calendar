import React, { useState } from 'react';
import { getFormErrorMessages, validatorGetters } from "../../validation";

export const EnterName = props => {
    console.log('mounting EnterName');
    const [name, setName] = useState('');
    const [error, setError] = useState('');

    const validation = { name: [validatorGetters.isOfLength(2)] };
    const submit = () => {
        const errorMessages = getFormErrorMessages({ name }, validation);
        if (errorMessages.length) {
            setError(errorMessages.join(';'));
        } else {
            props.onSubmit(name);
        }
    };

    return (
        <div>
            <input value={name} onChange={event => setName(event.target.value)} />
            <div>{error}</div>
            <button onClick={submit}>Begin</button>
        </div>
    );
};
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {getFormErrorMessages, validatorGetters} from "../../validation";
import { selectors as userSelectors, actions as userActions } from '../../store/user';

const MakeProfile = props => {
    const { allUserNames, fetchAllNames, updateName } = props;
    const [name, setName] = useState('');
    const values = { name };

    useEffect(() => {
        fetchAllNames();
    }, []);

    const validatorsByFieldName = {
        name: [validatorGetters.isNotNil(), validatorGetters.isOfLength(3)],
    };
    const [submissionErrorMessage, setSubmissionErrorMessage] = useState('');

    const onSubmit = () => {
        const errorMessages = getFormErrorMessages(values, validatorsByFieldName);
        if (errorMessages && errorMessages.length) {
            setSubmissionErrorMessage(`There was a problem with your submission: \n${errorMessages.join('\n')}`);
            return;
        }
        if (allUserNames.includes(name)) {
            setSubmissionErrorMessage(`That name is already taken.  Try another?`);
            return;
        }
        updateName(name, () => {

        });
    };
    const getOnChangeInput = stateSetter => event => stateSetter(event.target.value);
    return (
      <div>
          Looks like this is your first time here :) What would you like to be called?
          <input value={name} onChange={getOnChangeInput(setName)}/>
          <button onClick={onSubmit}>Get started!</button>
          <div>{submissionErrorMessage}</div>
      </div>
    );
};

const mapStateToProps = state => ({
   allUserNames: userSelectors.getAllUserNames(state),
});

const mapDispatchToProps = dispatch => ({
    fetchAllNames: () => dispatch(userActions.fetchAllNames()),
    updateName: (newName, callback) => dispatch(userActions.updateName(newName, callback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MakeProfile);
import React, { useState } from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import {IPlant} from "../../../server/db/models/plant/plant.interface";
import {entityId} from "../../../server/db/types";
import { getFormErrorMessages, validatorGetters } from '../../forms/validation';
import {actions as plantActions} from "../../store/plant";
import {IField} from "../../forms/interfaces";

interface ICreatePlantProps {
  createPlant: any;
  onCancel: () => any;
  onCreate: (object) => any;
  habitatId: entityId;
}

const Component = (props: ICreatePlantProps) => {
  const [justCreated, setJustCreated] = useState(false);

  const [name, setName] = useState('');
  const [lastWateredDaysAgo, setLastWateredDaysAgo] = useState(0);
  const [waterInterval, setWaterInterval] = useState(3);
  const [submissionErrorMessage, setSubmissionErrorMessage] = useState('');

  const onClickCreate = () => {
    const errorMessages = getFormErrorMessages(
        [
          {
            key: 'name',
            label: 'name',
            value: name,
            validators: [validatorGetters.isNotNil()],
          },
          {
            key: 'lastWateredDaysAgo',
            label: 'Last watered days ago',
            value: lastWateredDaysAgo,
            validators: [validatorGetters.isNotNil(), validatorGetters.isNumber()],
          },
          {
            key: 'waterInterval',
            label: 'Water interval',
            value: waterInterval,
            validators: [validatorGetters.isNotNil(), validatorGetters.isNumber()],
          },
        ],
        { name, lastWateredDaysAgo, waterInterval },
    );
    if (errorMessages && errorMessages.length) {
      setSubmissionErrorMessage(`There was a problem with your submission: \n${errorMessages.join('\n')}`);
    } else {
      props.createPlant({
        name,
        waterInterval,
        lastWatered: new Date(),// todo subtract lastWateredDaysAgo from today to get date
        habitatId: props.habitatId,
      }, (response: IPlant) => {
        setJustCreated(true);
        setTimeout(() => props.onCreate(response), 2000);
      });
    }
  };

  const getOnChangeInput = stateSetter => event => stateSetter(event.target.value);
  return (
    <ReactModal isOpen>
      {justCreated ? 'Created plant!' : (
        <div>
          <label>
            Plant name:
            <input value={name} onChange={getOnChangeInput(setName)}/>
          </label>
          <label>
            Days since watered:
            <input value={lastWateredDaysAgo} onChange={getOnChangeInput(setLastWateredDaysAgo)}/>
          </label>
          <label>
            Water interval:
            <input value={waterInterval} onChange={event => setWaterInterval(+event.target.value)}/>
          </label>
          {submissionErrorMessage.length ? (<div>{submissionErrorMessage}</div>) : null}
          <button onClick={props.onCancel}>cancel</button>
          <button onClick={onClickCreate}>create!</button>
        </div>
      )}
    </ReactModal>
  );
};

const mapDispatchToProps = dispatch => ({
  createPlant: (plant, callback?) => dispatch(plantActions.createOne(plant, callback)),
});

const CreatePlant = connect(null, mapDispatchToProps)(Component);
export { CreatePlant };
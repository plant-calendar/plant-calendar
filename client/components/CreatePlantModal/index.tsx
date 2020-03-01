import React, { useState } from 'react';
import {connect} from 'react-redux';
import ReactModal from 'react-modal';
import {IPlant} from "../../../server/db/models/plant/plant.interface";
import {entityId} from "../../../server/db/types";
import { getFormErrorMessages, validatorGetters } from '../../forms/validation';
import {actions as plantActions} from "../../store/plant";
import {IField} from "../../forms/interfaces";
import {CreateModal} from "../common/CreateModal";

interface ICreatePlantProps {
  createPlant: any;
  onCancel: () => any;
  onCreate: (object) => any;
  habitatId: entityId;
}

const Component = (props: ICreatePlantProps) => {
  const createPlant = partialPlantData => {
    const { name, waterInterval, lastWateredDaysAgo } = partialPlantData;
    props.createPlant({
      name,
      waterInterval,
      lastWatered: new Date(),// todo subtract lastWateredDaysAgo from today to get date
      habitatId: props.habitatId,
    }, (response: IPlant) => {
      setTimeout(() => props.onCreate(response), 2000);
    });
  };

  const fields = [
        {
          key: 'name',
          label: 'name',
          value: name,
          validators: [validatorGetters.isNotNil()],
        },
        {
          key: 'lastWateredDaysAgo',
          label: 'last watered days ago',
          validators: [validatorGetters.isNotNil(), validatorGetters.isNumber()],
        },
        {
          key: 'waterInterval',
          label: 'water interval',
          validators: [validatorGetters.isNotNil(), validatorGetters.isNumber()],
        },
    ];
  return (
    <CreateModal
        fields={fields}
        create={createPlant}
        onCancel={props.onCancel}
        afterCreate={props.onCreate}
        imageChoices={[
            '/plant-avatars/plant1.png',
            '/plant-avatars/plant2.png',
            '/plant-avatars/plant3.png',
            '/plant-avatars/plant4.png',
            '/plant-avatars/plant5.png',
            '/plant-avatars/plant6.png',
            '/plant-avatars/plant7.png',
            '/plant-avatars/plant8.png',
        ]}
    />
  );
};

const mapDispatchToProps = dispatch => ({
  createPlant: (plant, callback?) => dispatch(plantActions.createOne(plant, callback)),
});

const CreatePlant = connect(null, mapDispatchToProps)(Component);
export { CreatePlant };
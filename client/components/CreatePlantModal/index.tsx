import React from 'react';
import {connect} from 'react-redux';
import {validatorGetters} from "../../forms/validation";
import {entityId} from "../../../server/db/types";
import CreateModal, {IStage} from "../common/CreateModal";
import {FieldTypes} from "../../forms/interfaces";
import {actions as plantActions} from '../../store/plant';
import {IAugmentedPlant} from "../../store/habitat/selectors";

const timeOptions = [
    { value: 2, label: 'two days' },
    { value: 3, label: 'three days' },
    { value: 4, label: 'four days' },
    { value: 5, label: 'five days' },
    { value: 6, label: 'six days' },
    { value: 7, label: 'seven days' },
    { value: 8, label: 'eight days' },
    { value: 9, label: 'nine days' },
    { value: 10, label: 'ten days' },
    { value: 14, label: 'two weeks' },
    { value: 21, label: 'three weeks' },
    { value: 30, label: 'one month' },
];

const waterIntervalOptions = [{ value: 1, label: 'everyday' }].concat(
    timeOptions.map(option => ({ value: option.value, label: `every ${option.label}` })),
);
const lastWateredOptions = [
    { value: 0, label: 'today' },
    { value: 1, label: 'yesterday' },
].concat(
    timeOptions.map(option => ({ value: option.value, label: `${option.label} ago` })),
);


const millisecondsInADay = 1000 * 60 * 60 * 24;
const convertDaysAgoToDate = (daysAgo: number) =>
    new Date(new Date().getTime() - (daysAgo * millisecondsInADay)).toUTCString();

const getStages = (augmentedPlant?: IAugmentedPlant): IStage[] => {
    const {
        plant = {
            // if there is no plant (i.e. we are creating oe for the first time, set default values)
            name: '',
            imageUrl: '/plant-avatars/plant1.png',
            waterInterval: waterIntervalOptions[0].value,
        },
        subscribed = true,
    } = (augmentedPlant || {});

    return [
        {
            fields: [
                {
                    key: 'subscribed',
                    label: 'do you want to subscribe to this plant?',
                    type: FieldTypes.TOGGLE,
                    validators: [],
                    initial: subscribed,
                },
                {
                    key: 'name',
                    label: "what is this plant's name?",
                    validators: [
                        validatorGetters.isNotNil(),
                        validatorGetters.isAtLeastLength(3),
                        validatorGetters.isAtMostLength(20),
                        validatorGetters.isOfGenericAllowedCharacters(),
                    ],
                    type: FieldTypes.INPUT,
                    initial: plant.name,
                    lowerCase: true,
                },
            ],
        },
        {
            fields: [
                {
                    key: 'waterInterval',
                    label: 'how often should you water it?',
                    validators: [],
                    type: FieldTypes.DROPDOWN,
                    options: waterIntervalOptions,
                    initial: plant.waterInterval,
                },
                ...(augmentedPlant ? []  : [{
                    key: 'lastWatered',
                    label: 'how long ago did you last water it?',
                    validators: [],
                    type: FieldTypes.DROPDOWN,
                    options: lastWateredOptions,
                    initial: 0,
                }]),
                {
                    key: 'imageUrl',
                    label: 'pick an avatar for this plant.',
                    validators: [],
                    type: FieldTypes.AVATAR,
                    imageUrls: [
                        '/plant-avatars/plant1.png',
                        '/plant-avatars/plant2.png',
                        '/plant-avatars/plant3.png',
                        '/plant-avatars/plant4.png',
                        '/plant-avatars/plant5.png',
                        '/plant-avatars/plant6.png',
                        '/plant-avatars/plant7.png',
                        '/plant-avatars/plant8.png',
                    ],
                    initial: plant.imageUrl,
                },
            ],
        },
    ];
};

interface IProps {
    isCreate: boolean;
    onCancel: () => any;
    create: (toCreate: object, callback?: any) => any;
    update: (toUpdate: object, callback?: any) => any;
    afterSave: () => any;
    habitatId: entityId;
    augmentedPlant?: IAugmentedPlant;
}

const Component = (props: IProps) => {
    return (
      <CreateModal
          stages={getStages(props.augmentedPlant)}
          close={props.onCancel}
          save={
              props.isCreate
                  ? (toCreate, callback) => {
                    props.create({
                        ...toCreate,
                        lastWatered: convertDaysAgoToDate(toCreate.lastWatered),
                        waterInterval: +toCreate.waterInterval,
                    }, callback);
                  } : (updates, callback) => {
                    const { plant: existingPlant } = props.augmentedPlant;
                    props.update({
                        ...updates,
                        id: existingPlant.id,
                    }, callback);
                  }
          }
          afterSave={props.afterSave}
          submitButtonText={props.isCreate ? 'create' : 'update'}
      />
    );
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    create: (plantData, callback) => dispatch(
        plantActions.createOne({ ...plantData, habitatId: ownProps.habitatId }, callback),
    ),
    update: (plantData, callback) => dispatch(
        plantActions.updateOne(plantData, callback),
    ),
});

export default connect(null, mapDispatchToProps)(Component);
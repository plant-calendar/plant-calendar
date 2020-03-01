import React from 'react';
import {validatorGetters} from "../../forms/validation";
import {entityId} from "../../../server/db/types";
import CreateModal from "../common/CreateModal/index2";
import {FieldTypes} from "../../forms/interfaces";

const timeOptions = [
  'two days', 'three days', 'four days', 'five days',
    'six days', 'seven days', 'eight days', 'nine days', 'ten days',
    'two weeks', 'three weeks', 'one month',
];

const waterIntervalOptions = ['everyday'].concat(timeOptions.map(option => `every ${option}`));
const lastWateredOptions = ['yesterday'].concat(timeOptions.map(option => `${option} ago`));

const stages = [
    {
        fields: [
            {
                key: 'name',
                label: "what is your plant's name?",
                value: name,
                validators: [validatorGetters.isNotNil()],
            },
            {
                key: 'avatar',
                label: 'pick an avatar!',
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
                initial: '/plant-avatars/plant1.png',
            },
        ],
    },
    {
        fields: [
            {
                key: 'waterInterval',
                label: 'how often do you need to water it?',
                validators: [],
                type: FieldTypes.DROPDOWN,
                options: waterIntervalOptions,
            },
            {
                key: 'lastWateredDaysAgo',
                label: 'how long ago did you last water it?',
                validators: [],
                type: FieldTypes.DROPDOWN,
                options: lastWateredOptions,
            },
        ],
    },
];

interface IProps {
    createPlant: any;
    onCancel: () => any;
    onCreate: (object) => any;
    habitatId: entityId;
}

export default (props: IProps) => {
    return (
      <CreateModal
          stages={stages}
          close={props.onCancel}
      />
    );
};


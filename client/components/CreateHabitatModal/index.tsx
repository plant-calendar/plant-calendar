import React from 'react';
import {connect} from 'react-redux';
import {actions as habitatActions} from '../../store/habitat';
import CreateModal from "../common/CreateModal";
import {validatorGetters} from "../../forms/validation";
import {FieldTypes} from "../../forms/interfaces";
import {IHabitat} from "../../../server/db/models/habitat/habitat.interface";

interface IProps {
    create: (p1: any, p2: any) => any;
    afterCreate: (createdHabitat?: object) => any;
    onCancel: () => any;
}

const getStages = (existingHabitat?: IHabitat) => {
    const {
        name = '',
        imageUrl = '/habitat-avatars/habitat1.png',
    } = (existingHabitat || {});
    return [
        {
            fields: [
                {
                    key: 'name',
                    label: 'what do you want to call this habitat?',
                    lowerCase: true,
                    validators: [
                        validatorGetters.isNotNil(),
                        validatorGetters.isAtLeastLength(3),
                        validatorGetters.isOfGenericAllowedCharacters(),
                    ],
                    initial: name,
                    type: FieldTypes.INPUT,
                },
                {
                    key: 'imageUrl',
                    label: 'pick an avatar for this habitat .',
                    validators: [],
                    type: FieldTypes.AVATAR,
                    imageUrls: [
                        '/habitat-avatars/habitat1.png',
                        '/habitat-avatars/habitat2.png',
                        '/habitat-avatars/habitat3.png',
                        '/habitat-avatars/habitat4.png',
                        '/habitat-avatars/habitat5.png',
                        '/habitat-avatars/habitat6.png',
                        '/habitat-avatars/habitat7.png',
                        '/habitat-avatars/habitat8.png',
                    ],
                    initial: imageUrl,
                },
            ],
        },
    ];
};

const Component = (props: IProps) => {
    return (
      <CreateModal
          stages={getStages()}
          save={props.create}
          afterSave={props.afterCreate}
          close={props.onCancel}
          submitButtonText="create!"
      />
    );
};

const mapDispatchToProps = dispatch => ({
    create: (habitat, callback) => dispatch(habitatActions.createOne(habitat, callback)),
});

const CreateHabitat = connect(null, mapDispatchToProps)(Component);
export { CreateHabitat };
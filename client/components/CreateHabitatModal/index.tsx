import React from 'react';
import { connect } from 'react-redux';
import { actions as habitatActions } from '../../store/habitat';
import CreateModal from "../common/CreateModal";
import {validatorGetters} from "../../forms/validation";

interface IProps {
    create: (p1: any, p2: any) => any;
    afterCreate: (createdHabitat?: object) => any;
    onCancel: () => any;
}

const stages = [
    {
      fields: [
          {
              key: 'name',
              label: 'what do you want to call this habitat?',
              validators: [validatorGetters.isNotNil(), validatorGetters.isOfLength(3)],
          },
      ],
    },
];

const Component = (props: IProps) => {
    return (
      <CreateModal
          stages={stages}
          save={props.create}
          afterSave={props.afterCreate}
          close={props.onCancel}
      />
    );
};

const mapDispatchToProps = dispatch => ({
    create: (habitat, callback) => dispatch(habitatActions.createOne(habitat, callback)),
});

const CreateHabitat = connect(null, mapDispatchToProps)(Component);
export { CreateHabitat };
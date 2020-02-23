import React, {useState} from 'react';
import { connect } from 'react-redux';
import ReactModal from 'react-modal';
import { actions as habitatActions } from '../../store/habitat';
import {CreateModal} from "../common/CreateModal";
import {validatorGetters} from "../../forms/validation";

interface IProps {
    create: (p1: any, p2: any) => any;
    afterCreate: (createdHabitat?: object) => any;
    onCancel: () => any;
}

const Component = (props: IProps) => {
    const fields = [
        {
            key: 'name',
            label: 'name',
            value: name,
            validators: [validatorGetters.isNotNil(), validatorGetters.isOfLength(3)],
        },
    ];
    return (
      <CreateModal
          fields={fields}
          create={props.create}
          afterCreate={props.afterCreate}
          onCancel={props.onCancel}
      />
    );
};

const mapDispatchToProps = dispatch => ({
    create: (habitat, callback) => dispatch(habitatActions.createOne(habitat, callback)),
});

const CreateHabitat = connect(null, mapDispatchToProps)(Component);
export { CreateHabitat };
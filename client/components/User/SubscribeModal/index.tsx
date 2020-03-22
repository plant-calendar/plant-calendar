import React, {useState} from 'react';
import ReactModal from 'react-modal';
import { connect } from 'react-redux';
import {BASE_MODAL_STYLE} from "../../style-config";
import Confirm from './Confirm';
import Select from './Select';
import {Close} from "../../common/CloseSign";
import {IHabitat} from "../../../../server/db/models/habitat/habitat.interface";
import { actions as habitatActions, selectors as habitatSelectors } from '../../../store/habitat';
import {entityId} from "../../../../server/db/types";

interface IProps {
    close: () => any;
    searchHabitats: (searchString: string) => any;
    habitats: IHabitat[];
    requestSubscription: (habitatId: entityId, callback: () => any) => any;
}

const Component = (props: IProps) => {
    const [habitatToConfirm, setToConfirm] = useState(null as unknown as IHabitat);
    const onConfirmSubscriptionRequest = (habitatId: entityId) => {
      props.requestSubscription(habitatId, () => props.close());
    };

    return (
        <ReactModal isOpen style={{ content: BASE_MODAL_STYLE.CONTENT }}>
            <Close onClick={props.close} />
            {habitatToConfirm
                ? <Confirm habitat={habitatToConfirm} onConfirm={onConfirmSubscriptionRequest} />
                : <Select
                    searchHabitats={props.searchHabitats}
                    habitats={props.habitats}
                    onClickHabitat={(selected: IHabitat) => setToConfirm(selected)}
                />
            }
        </ReactModal>
    );
};

const mapDispatchToProps = dispatch => ({
    searchHabitats: searchString => dispatch(habitatActions.habitatSearch(searchString)),
    requestSubscription: (habitatId, callback) => dispatch(habitatActions.requestSubscription(habitatId, callback)),
});

const mapStateToProps = state => ({
    habitats: habitatSelectors.queriedHabitats(state),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
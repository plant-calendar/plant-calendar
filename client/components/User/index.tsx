import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { TitleAndBackContainer, Title, Container } from "../Habitat/styled-components";
import { selectors as userSelectors, actions as userActions } from '../../store/user';
import { selectors as habitatSelectors, actions as habitatActions } from '../../store/habitat';
import AddTile from "../common/AddTile";
import { CreateHabitat } from "../CreateHabitatModal";
import TileContainer from '../TileDisplay';
import SubscribeModal from './SubscribeModal';
import Notification from '../common/Notification';
import AcceptSubscriptionsModal, {ISubscriptionRequest} from './AcceptSubscriptionsModal';
import getHabitatTileData from './get-habitat-tile-data';
import {entityId} from "../../../common/db-interfaces/types";
import Logout from '../Logout';

const StyledNotificationAndLogoutContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 125px;
`;

const UserHabitatsComponent = props => {
    const {
        user,
        habitats = [],
        match,
        fetchUser,
        fetchUserSubscribedHabitats,
        subscriptionRequests,
        fetchSubscriptionRequests,
        acceptSubscriptionRequest,
        rejectSubscriptionRequest,
        setSubscriptionRequests,
    } = props;
    const userId = +match.params.id;
    if (!user) {
        fetchUser(userId);
        return null;
    }
    const [addHabitatOpen, setAddHabitatOpen] = useState(false);
    const [subscribeToNewHabitatOpen, setSubscribeToNewHabitatOpen] = useState(false);
    const [subscriptionRequestModalOpen, setSubscriptionRequestModalOpen] = useState(false);

    useEffect(() => {
        fetchUserSubscribedHabitats(userId);
    }, []);
    useEffect(() => {
        fetchSubscriptionRequests();
    }, []);

    const getSubscriptionRequestDecisionCallback = (requestId: entityId) => () => {
        setSubscriptionRequests(subscriptionRequests.filter(request => request.id !== requestId));
    };
    return (
        <div>
            {addHabitatOpen
                ? <CreateHabitat
                    afterCreate={createdHabitat => {
                        setAddHabitatOpen(false);
                        props.history.push(`/habitats/${createdHabitat.id}`);
                    }}
                    onCancel={() => setAddHabitatOpen(false)}
                />
                : null
            }
            {subscribeToNewHabitatOpen
                ? <SubscribeModal close={() => setSubscribeToNewHabitatOpen(false)} />
                : null
            }
            {subscriptionRequestModalOpen
                ? (
                    <AcceptSubscriptionsModal
                        close={() => setSubscriptionRequestModalOpen(false)}
                        accept={(request: ISubscriptionRequest) => acceptSubscriptionRequest(
                            request,
                            getSubscriptionRequestDecisionCallback(request.id),
                        )}
                        reject={(request: ISubscriptionRequest) => rejectSubscriptionRequest(
                            request,
                            getSubscriptionRequestDecisionCallback(request.id),
                        )}
                        requests={subscriptionRequests}
                    />
                ) : null
            }
            <Container>
                <TitleAndBackContainer>
                    <StyledNotificationAndLogoutContainer>
                        <Logout />
                        <Notification
                            active={!!subscriptionRequests.length}
                            onClick={!!subscriptionRequests.length
                                ? () => setSubscriptionRequestModalOpen(true)
                                : () => undefined
                            }
                        />
                    </StyledNotificationAndLogoutContainer>
                    <Title>@{user.name}</Title>
                </TitleAndBackContainer>
                <AddTile message="Create new habitat" onClick={() => setAddHabitatOpen(true)}/>
                <AddTile message="Subscribe to habitat" onClick={() => setSubscribeToNewHabitatOpen(true)}/>
                <TileContainer tiles={habitats.map(getHabitatTileData)} />
            </Container>
        </div>
    );
};

const mapStateToProps = state => ({
    user: userSelectors.getUser(state),
    habitats: habitatSelectors.habitats(state),
    subscriptionRequests: userSelectors.getSubscriptionRequests(state),
});

const mapDispatchToProps = dispatch => ({
    fetchUserSubscribedHabitats: (userId, callback) =>
       dispatch(habitatActions.fetchUserSubscribedHabitats(userId, callback)),
    fetchUser: userId => dispatch(userActions.fetchUserById(userId)),
    fetchSubscriptionRequests: (callback?: any) => dispatch(userActions.fetchSubscriptionRequests(callback)),
    acceptSubscriptionRequest: (request: ISubscriptionRequest, callback?) =>
        dispatch(userActions.acceptSubscriptionRequest(request, callback)),
    rejectSubscriptionRequest: (request: ISubscriptionRequest, callback?) =>
        dispatch(userActions.rejectSubscriptionRequest(request, callback)),
    setSubscriptionRequests: requests => dispatch(userActions.setSubscriptionRequests(requests)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHabitatsComponent);
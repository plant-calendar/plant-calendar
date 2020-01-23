import React from 'react';
import { connect } from 'react-redux';
import { AllTilesContainer, Title, Container } from "../Habitat/styled-components";
import { selectors as userSelectors } from '../../store/user';
import { selectors as habitatSelectors, actions as habitatActions } from '../../store/habitat';
import AddTile from "../common/AddTile";

const UserHabitatsComponent = props => {
    const { user } = props;
    return (
        <Container>
            <Title>@{user.name}</Title>
            <AddTile message="Add a habitat" onClick={() => undefined}/>
            <AllTilesContainer>

            </AllTilesContainer>
        </Container>
    );
};

const mapStateToProps = state => ({
    user: userSelectors.getUser(state),
    habitats: habitatSelectors.habitats(state),
});

const mapDispatchToProps = dispatch => ({
   fetchUserSubscribedHabitats: (userId, callback) =>
       dispatch(habitatActions.fetchUserSubscribedHabitats(userId, callback)),
});

export default connect(mapStateToProps)(UserHabitatsComponent);
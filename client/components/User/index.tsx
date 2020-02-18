import React, {useEffect} from 'react';
import { connect } from 'react-redux';
import { AllTilesContainer, Title, Container } from "../Habitat/styled-components";
import { selectors as userSelectors, actions as userActions } from '../../store/user';
import { selectors as habitatSelectors, actions as habitatActions } from '../../store/habitat';
import AddTile from "../common/AddTile";
import Tile from "../Tile";

const UserHabitatsComponent = props => {
    const { user, habitats = [], match, fetchUser, fetchUserSubscribedHabitats } = props;
    const userId = +match.params.id;
    if (!user) {
        fetchUser(userId);
        return null;
    }
    useEffect(() => {
        fetchUserSubscribedHabitats(userId);
    }, []);

    return (
        <Container>
            <Title>@{user.name}</Title>
            <AddTile message="Add a habitat" onClick={() => undefined}/>
            <AllTilesContainer>
                {habitats.map(habitat => (
                    <Tile key={habitat.id} title={habitat.name} details={`${habitat.plants.length} plants`}/>
                ))}
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
    fetchUser: userId => dispatch(userActions.fetchUserById(userId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UserHabitatsComponent);
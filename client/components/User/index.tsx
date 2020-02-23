import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { AllTilesContainer, Title, Container } from "../Habitat/styled-components";
import { Link } from 'react-router-dom';
import { selectors as userSelectors, actions as userActions } from '../../store/user';
import { selectors as habitatSelectors, actions as habitatActions } from '../../store/habitat';
import AddTile from "../common/AddTile";
import Tile from "../Tile";
import { CreateHabitat } from "../CreateHabitatModal";

const UserHabitatsComponent = props => {
    const { user, habitats = [], match, fetchUser, fetchUserSubscribedHabitats } = props;
    const userId = +match.params.id;
    if (!user) {
        fetchUser(userId);
        return null;
    }
    const [addHabitatOpen, setAddHabitatOpen] = useState();
    useEffect(() => {
        fetchUserSubscribedHabitats(userId);
    }, []);


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
            <Container>
                <Title>@{user.name}</Title>
                <AddTile message="Add a habitat" onClick={() => setAddHabitatOpen(true)}/>
                <AllTilesContainer>
                    {habitats.map(habitat => (
                        <Link key={habitat.id} to={`/habitats/${habitat.id}`} >
                            <Tile
                                title={habitat.name}
                                details={`${habitat.plants.length} plants`}
                            />
                        </Link>
                    ))}
                </AllTilesContainer>
            </Container>
        </div>
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
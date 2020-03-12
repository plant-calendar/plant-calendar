import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { TitleAndBackContainer, Title, Container } from "../Habitat/styled-components";
import { selectors as userSelectors, actions as userActions } from '../../store/user';
import { selectors as habitatSelectors, actions as habitatActions } from '../../store/habitat';
import AddTile from "../common/AddTile";
import { CreateHabitat } from "../CreateHabitatModal";
import TileContainer from '../TileDisplay/index2';

const UserHabitatsComponent = props => {
    const { user, habitats = [], match, fetchUser, fetchUserSubscribedHabitats } = props;
    const userId = +match.params.id;
    if (!user) {
        fetchUser(userId);
        return null;
    }
    const [addHabitatOpen, setAddHabitatOpen] = useState(false);
    const [subscribeToNewHabitatOpen, setSubscribeToNewHabitatOpen] = useState(false);
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
                <TitleAndBackContainer>
                    <Title>@{user.name}</Title>
                </TitleAndBackContainer>
                <AddTile message="Create new habitat" onClick={() => setAddHabitatOpen(true)}/>
                <AddTile message="Subscribe to habitat" onClick={() => setSubscribeToNewHabitatOpen(true)}/>
                {/*<AllTilesContainer>*/}
                {/*    {habitats.map(habitat => (*/}
                {/*        <Link key={habitat.id} to={`/habitats/${habitat.id}`} >*/}
                {/*            <Tile*/}
                {/*                title={habitat.name}*/}
                {/*                details={`${habitat.plants.length} plants`}*/}
                {/*            />*/}
                {/*        </Link>*/}
                {/*    ))}*/}
                {/*</AllTilesContainer>*/}
                <TileContainer
                    tiles={habitats.map(habitat => ({
                        elementKey: habitat.id,
                        linkTo: `/habitats/${habitat.id}`,
                        title: habitat.name,
                        details: `${habitat.plants.length} plants`,
                        imageUrl: '/plant-avatars/plant5.png',
                        hasSettings: true,
                        openSettings: () => console.log(`opened settings for habitat ${habitat.id}`);
                    }))}
                />
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
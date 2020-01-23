import React from 'react';
import { connect } from 'react-redux';
import { AllTilesContainer, Title, Container } from "../Habitat/styled-components";
import { selectors as userSelectors } from '../../store/user';
import AddTile from "../common/AddTile";

const UserHabitatsComponent = props => {
    console.log('mounted UserHabitatsComponent');
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
});

export default connect(mapStateToProps)(UserHabitatsComponent);
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions as userActions, selectors as userSelectors } from "../../store/user";
import styled from 'styled-components';
import { COLORS } from "../style-config";

const Container = styled.div`
    position: relative;
    width: 100vw;
    height: 100vh;
`;


const CentralDiv = styled.div`
    position: absolute;
    left: 33vw;
    top: 33vh;
    width: 33vw;

    color: ${COLORS.darkGreen};
    padding: 1%;
`;

const GoogleButton = styled.a`
    display: flex;
    background: rgb(61, 136, 237);
    color: white;
    text-decoration: none;
    border-radius: 5px;
    padding: 1px;
    width: 210px;

    &:active {
        background: rgb(48, 106, 207);
    }
`;

const GoogleImage = styled.img`
    height: 50px;
    width: 50px;
`;

const GoogleTextContainer = styled.div`
    padding: 5%;
`;

const GoogleText = styled.div`
`;

const LoginComponent = props => {
    return (
            <Container>
                <CentralDiv>
                    <h1>PlantCalendar</h1>
                    <GoogleButton href="https://hungry-plants/herokuapp.com/auth/google">
                        <GoogleImage src="/google-icon.png"/>
                        <GoogleTextContainer>
                            <GoogleText>Sign in with Google</GoogleText>
                        </GoogleTextContainer>
                    </GoogleButton>
                </CentralDiv>
            </Container>
    );
};

const mapStateToProps = state => ({
   user: userSelectors.getUser(state),
   userToken: userSelectors.getUserToken(state),
});

const mapDispatchToProps = dispatch => ({
    setUserToken: token => dispatch(userActions.setUserToken(token)),
    // fetchUserByToken: (token, callback) => dispatch(userActions.fetchUserByToken(token, callback)),
    createUser: (name, callback) => dispatch(userActions.createUser(name, callback)),
});
export const Login = connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actions as userActions, selectors as userSelectors } from "../../store/user";
import styled from 'styled-components';
import { COLORS } from "../style-config";

const Container = styled.div`

`;


const CentralDiv = styled.div`
    padding: 5%;
    margin-top: -10px;
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
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 7px;
`;

const GoogleText = styled.div`
    font-family: Roboto;
`;

const TitleText = styled.div`
    font-size: 6vh;
    line-height: 78px;
    color: ${COLORS.primaryGreen};
    padding-bottom: 3vh;
`;

const Intro = styled.div`
    padding-bottom: 5vh;
`;

const DemoLink = styled.a`
    text-decoration: none;
    color: ${COLORS.darkGreen};
    font-weight: bolder;
    -webkit-font-smoothing: antialiased;
`;

const Plant = styled.img`
    height: 45vh;  
    max-width: 100vw;
`;

const LoginComponent = props => {
    return (
            <Container>
                <Plant src="https://s3-alpha-sig.figma.com/img/6c63/70ed/ad1930cd4b50ded9905c58f50ef09c33?Expires=1583107200&Signature=gCz7L7810K8SjuRcWD~8M2u4HHRjNAmFCM8k7SWsa3J9eyb9oervC6ASyUkXD0ZSr4bX4nTQql2VRnUslMYTb7GPwqAlxMlqnN38UnqRLoGIcFjIx4Ntf64glsb15gIn~~xy9tmSSkxnH47NdWQhXEvH4SIP7e7z8-JnIdL5EkeSbBeKQ09cbh3WDrxteuU0MASJjqx4Yko20WjfYIwnNeDYPvUGrYxf19s8rcJPlAFANqoNeqJ~YgtI6bSihYevKruHkOGdMqo0aSi47aIUjqpsfkL591Y5plrr61k0m2cBunmiG3AfFtKbcPgi2gulnS0AQwh95TkH~lA32VAYTw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" />
                <CentralDiv>
                    <TitleText>PlantCalender</TitleText>
                    {/*<GoogleButton href="https://hungry-plants.herokuapp.com/auth/google">*/}
                    <Intro>
                        Keep track of when to water plants.  Collaborate with
                        others to keep them watered and happy.
                        <DemoLink
                            href="https://www.youtube.com/watch?v=YYUyGZMJTSc"
                        > See a demo here. </DemoLink>
                        Click below to get started!
                    </Intro>
                    <GoogleButton href="http://localhost:3000/auth/google">
                        <GoogleImage src="/icons/google-icon.png"/>
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

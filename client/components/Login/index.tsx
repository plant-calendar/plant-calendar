import React from 'react';
import styled from 'styled-components';
import { COLORS } from "../style-config";
import GrowthBackground from '../common/GrowthBackground';
import { apiBaseUrl } from '../../config';

const Container = styled.div`
`;

const CentralDiv = styled.div`
    padding: 5%;
    margin-top: -10px;
    position: absolute;
    top: 40%;
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

export default () => {
    return (
            <Container>
                <GrowthBackground yStart={0.2} keyBase="login" />
                <CentralDiv>
                    <TitleText>PlantCalender</TitleText>
                    <Intro>
                        Keep track of when to water plants.  Collaborate with
                        others to keep them watered and happy.
                        <DemoLink
                            href="https://www.youtube.com/watch?v=YYUyGZMJTSc"
                        > See a demo here. </DemoLink>
                        Click below to get started!
                    </Intro>
                    <GoogleButton href={`${apiBaseUrl}/auth/google`}>
                        <GoogleImage src="/icons/google-icon.png"/>
                        <GoogleTextContainer>
                            <GoogleText>Sign in with Google</GoogleText>
                        </GoogleTextContainer>
                    </GoogleButton>
                </CentralDiv>
            </Container>
    );
};

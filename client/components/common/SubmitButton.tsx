import React from 'react';
import styled from 'styled-components';
import {COLORS} from "../style-config";

const StyledButton = styled.button`
    background: ${COLORS.primaryGreen};
    color: ${COLORS.white};
    width: 30vw;
    height: 4vh;
    cursor: pointer;
`;

export const SubmitButton = props => {
    return <StyledButton onClick={props.onClick}>{props.text}</StyledButton>;
};
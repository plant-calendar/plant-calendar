import React from 'react';
import styled from 'styled-components';
import {COLORS} from "../style-config";
import {apiBaseUrl} from '../../config';

const StyledLogout = styled.a`
    background: ${COLORS.primaryGreen};
    border-radius: 5px;
    padding: 1px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 75px;

    &:hover {
        
    }
    &:active {
        background: ${COLORS.darkGreen};
    }
    text-decoration: none;
    color: ${COLORS.white};
`;

export default () => (
    <StyledLogout href={`${apiBaseUrl}/auth/logout`}>logout</StyledLogout>
);
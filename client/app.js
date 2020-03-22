import React from 'react';
import Routes from './routing';
import styled from 'styled-components';
import { COLORS } from "./components/style-config";

const AppDiv = styled.div`
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    color: ${COLORS.primaryGreen};
    height: 100%;
    width: 100%;
`;

export default () => <AppDiv><Routes/></AppDiv>;

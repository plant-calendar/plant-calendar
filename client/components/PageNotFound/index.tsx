import React from 'react';
import styled from 'styled-components';
import {COLORS} from "../style-config";

const StyledContainer = styled.div`
  color: ${COLORS.darkGray};
  font-size: larger;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default () => (
  <StyledContainer>nothing grows here!</StyledContainer>
);
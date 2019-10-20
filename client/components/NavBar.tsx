import React from 'react';
import styled from 'styled-components';
import { COLORS } from "./style-config";

const Bar = styled.div`
  background: ${COLORS.primaryGreen};
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px;
  text-decoration: none;
    position: fixed;
  top: 0;
  width: 100%;
`;

const NavBar = () => {
  return <Bar>NavBar</Bar>;
};

export default NavBar;

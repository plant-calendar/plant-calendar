import React from 'react';
import styled from 'styled-components';
import { COLORS } from "./style-config";

const Bar = styled.div`
  background: ${COLORS.primaryGreen};
  float: left;
  display: block;
  padding: 14px;
  position: fixed;
  top: 0;
  width: 100%;
  height: 40px;
`;

const BarContents = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-right: 25px;
`;

const NavBar = () => {
  return <Bar>
    <BarContents>
    <svg width="36" height="24" viewBox="0 0 36 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 24H36V20H0V24ZM0 14H36V10H0V14ZM0 0V4H36V0H0Z" fill="white"/>
    </svg>
    </BarContents>
  </Bar>;
};

export default NavBar;

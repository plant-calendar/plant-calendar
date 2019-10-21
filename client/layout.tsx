import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavBar } from './components';
import {FONT_STYLES} from "./components/style-config";

const Container = styled.div`
  font-family: ${FONT_STYLES.primary};
`;

const Layout = ({ navBarOpen, children }) => {
  return (
    <Container>
      {navBarOpen && <NavBar/>}
      <div style={{  padding: '16px', paddingTop: '60px'}}>{children}</div>
    </Container>
  );
};

const mapStateToProps = ({ ui }) => ({
  navBarOpen: true,//ui.navBar.open,
});

export default connect(mapStateToProps)(Layout);

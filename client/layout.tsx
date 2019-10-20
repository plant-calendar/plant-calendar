import React from 'react';
import { connect } from 'react-redux';
import { NavBar } from './components';

const Layout = ({ navBarOpen, children }) => {
  return (
    <div>
      {navBarOpen && <NavBar/>}
      {children}
    </div>
  );
};

const mapStateToProps = ({ ui }) => ({
  navBarOpen: true,//ui.navBar.open,
});

export default connect(mapStateToProps)(Layout);

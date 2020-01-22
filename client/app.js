import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import Layout from './layout';
import Routes from './routes';
import { Login } from './components/Login';
import { selectors as userSelectors } from "./store/user";

const App = props => {
    const { user } = props;
    return <Fragment>{user ? <Layout><Routes/></Layout> : <Login/>}</Fragment>;
};

const mapStateToProps = state => ({ user: userSelectors.getUser(state) });
export default connect(mapStateToProps)(App);

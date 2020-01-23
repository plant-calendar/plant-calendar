import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Layout from './layout';
import Routes from './routes';
import { Login } from './components/Login';
import { selectors as userSelectors, actions as userActions } from "./store/user";

const App = props => {
    const { user, userToken, setUser, setUserToken } = props;

    return <Routes/>;
    // return <Fragment>{user ? <Layout><Routes/></Layout> : <Login/>}</Fragment>;
};

const mapStateToProps = state => ({
    user: userSelectors.getUser(state) || {},
    userToken: userSelectors.getUserToken(state),
});
const mapDispatchToProps = dispatch => ({
    setUser: user => dispatch(userActions.setUser(user)),
    setUserToken: token => dispatch(userActions.setUserToken(token)),
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

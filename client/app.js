import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Layout from './layout';
import Routes from './routes';
import { Login } from './components/Login';
import { selectors as userSelectors, actions as userActions } from "./store/user";
import styled from 'styled-components';

const AppDiv = styled.div`
    
`;

const App = props => {
    const { userToken, logOut } = props;
    const loggedIn = userToken && userToken.length;
    return <AppDiv>{loggedIn ? <button onClick={logOut}>Logout</button> : null}<Routes/></AppDiv>;
};

const mapStateToProps = state => ({
    user: userSelectors.getUser(state) || {},
    userToken: userSelectors.getUserToken(state),
});
const mapDispatchToProps = dispatch => ({
    logOut: () => {
      dispatch(userActions.setUserToken(''));
      dispatch(userActions.setUser(null));
    },
});
export default connect(mapStateToProps, mapDispatchToProps)(App);

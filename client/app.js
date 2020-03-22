import React, {Fragment} from 'react';
import { connect } from 'react-redux';
import Routes from './routing';
import { selectors as userSelectors, actions as userActions } from "./store/user";
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

const App = props => {
    const { userToken, logOut } = props;
    const loggedIn = userToken && userToken.length;
    return (
        <AppDiv>
            {loggedIn
                ? <button onClick={logOut}>Logout</button>
                : null
            }
            <Routes/>
        </AppDiv>
    );
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

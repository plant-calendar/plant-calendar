import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Habitat from "./components/Habitat";
import UserHabitats from './components/User';
import {Login} from "./components/Login";
import { selectors as userSelectors } from './store/user';
import {actions as userActions} from "./store/user";


// note that there is ultimately no way to definitively prevent navigation
// to any page in the app... therefore onus is on API to prevent protected
// data from reaching ANY page if the user is not authorized ot view it
const LoggedInRouteComponent =
    ({
        component: Component,
        LOGGED_IN_ROUTE__haveUser,
        LOGGED_IN_ROUTE__setUserToken,
        LOGGED_IN_ROUTE__setUser,
        ...rest
     }) => {
        let isLoggedIn = false;
        if (LOGGED_IN_ROUTE__haveUser) {
            isLoggedIn = true;
        } else {
            const localStorageUserId = localStorage.getItem('userId');
            const localStorageUserName = localStorage.getItem('userName');
            const localStorageUserToken = localStorage.getItem('userToken');

            if (localStorageUserId && localStorageUserName && localStorageUserToken) {
                LOGGED_IN_ROUTE__setUserToken(localStorageUserToken);
                LOGGED_IN_ROUTE__setUser({
                    id: localStorageUserId,
                    name: localStorageUserName,
                });
                isLoggedIn = true;
            }
        }
        return (
            <Route {...rest} render={
                props => (isLoggedIn ? <Component {...props} /> : <Redirect to="/login"/>)
            }/>
        );
    };

const mapStateToProps = state => ({
    LOGGED_IN_ROUTE__haveUser: !!userSelectors.getUser(state),
});
const mapDispatchToProps = dispatch => ({
    LOGGED_IN_ROUTE__setUserToken: token => dispatch(userActions.setUserToken(token)),
    LOGGED_IN_ROUTE__setUser: user => dispatch(userActions.setUser(user)),
});

const LoggedInRoute = connect(mapStateToProps, mapDispatchToProps)(LoggedInRouteComponent);

const Routes = () => {
  return (
    <Switch>
        <Route path="/login" component={Login} />
        <Route path="/users/:id/habitats" component={UserHabitats} />
        <Route path="/habitats/:id" component={Habitat} />
    </Switch>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(Routes));
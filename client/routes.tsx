import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter, Redirect} from 'react-router-dom';
import Habitat from "./components/Habitat";
import UserHabitats from './components/User';
import {Login} from "./components/Login";
import { selectors as authSelectors } from './store/auth';
import {actions as authActions} from "./store/auth";
import MakeProfile from './components/User/make-profile';
import api from './api';


const LoggedInRouteComponent =
    ({
        component: Component,
        LOGGED_IN_ROUTE__haveUser,
        LOGGED_IN_ROUTE__getHaveUser,
        LOGGED_IN_ROUTE__isRedirectAfterLogin,
        LOGGED_IN_ROUTE_loadingHaveUser,
        ...rest
     }) => {
        useEffect(() => {
            LOGGED_IN_ROUTE__getHaveUser();
        }, []);
        if (LOGGED_IN_ROUTE__haveUser !== null && !LOGGED_IN_ROUTE_loadingHaveUser) {
            return <Route {...rest} render={
                props => (LOGGED_IN_ROUTE__haveUser ? <Component {...props} /> : <Redirect to="/login"/>)
            }/>;
        }
        return null;
    };

const mapStateToProps = state => ({
    LOGGED_IN_ROUTE__haveUser: authSelectors.getHaveUser(state),
});
const mapDispatchToProps = dispatch => ({
    LOGGED_IN_ROUTE__getHaveUser: () => dispatch(authActions.getHaveUser()),
});
const LoggedInRoute = connect(mapStateToProps, mapDispatchToProps)(LoggedInRouteComponent);

const Routes = props => {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <LoggedInRoute
                path="/users/:id/habitats"
                component={UserHabitats}
                LOGGED_IN_ROUTE__isRedirectAfterLogin
            />
            <LoggedInRoute
                path="/users/:id/make-profile"
                component={MakeProfile}
                LOGGED_IN_ROUTE__isRedirectAfterLogin
            />
            <LoggedInRoute
                path="/habitats/:id"
                component={Habitat}
            />
        </Switch>
    );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(Routes));
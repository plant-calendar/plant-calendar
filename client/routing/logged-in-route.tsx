import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import {actions as authActions, selectors as authSelectors} from "../store/auth";

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
            return (
                <Route
                    {...rest}
                    render={props => (LOGGED_IN_ROUTE__haveUser ? <Component {...props} /> : <Redirect to="/login"/>)}
                />
            );
        }
        return null;
    };

const mapStateToProps = state => ({
    LOGGED_IN_ROUTE__haveUser: authSelectors.getHaveUser(state),
});
const mapDispatchToProps = (dispatch, ownProps) => {
    return {LOGGED_IN_ROUTE__getHaveUser: () => dispatch(authActions.getHaveUser(ownProps.location.pathname))};
};

const LoggedInRoute = connect(mapStateToProps, mapDispatchToProps)(LoggedInRouteComponent)
export { LoggedInRoute };
import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import Habitat from "../components/Habitat/index2";
import UserHabitats from '../components/User';
import {Login} from "../components/Login";
import MakeProfile from '../components/User/make-profile';
import { LoggedInRoute } from "./logged-in-route";

const Index = () => {
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
export default withRouter(connect()(Index));
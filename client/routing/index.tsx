import React, { Suspense } from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import { LoggedInRoute } from "./logged-in-route";

const LazyLogin = React.lazy(() => import('../components/Login'));
const LazyUser = React.lazy(() => import('../components/User'));
const LazyMakeProfile = React.lazy(() => import('../components/User/make-profile'));
const LazyHabitat = React.lazy(() => import('../components/Habitat'));

const Index = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Switch>
                <Route path="/login" component={LazyLogin} />
                <LoggedInRoute
                    path="/users/:id/habitats"
                    component={LazyUser}
                    LOGGED_IN_ROUTE__isRedirectAfterLogin
                />
                <LoggedInRoute
                    path="/users/:id/make-profile"
                    component={LazyMakeProfile}
                    LOGGED_IN_ROUTE__isRedirectAfterLogin
                />
                <LoggedInRoute
                    path="/habitats/:id"
                    component={LazyHabitat}
                />
            </Switch>
        </Suspense>
    );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(Index));
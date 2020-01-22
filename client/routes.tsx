import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import Habitat from "./components/Habitat";


// TODO if they attempt to access a page with no token, reroute them to sign in
const Routes = () => {
  return (
    <Switch>
      <Route path="/habitats/:id" component={Habitat} />
    </Switch>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(Routes));
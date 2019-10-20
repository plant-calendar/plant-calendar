import React from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';


const Routes = props => {
  return (
    <Switch>
      <Route path="/habitats/:id" component={}
    </Switch>
  );
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect()(Routes));
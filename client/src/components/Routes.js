import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AuthenticatedRoute from './authentication/AuthenticatedRoute';
import Home from './Home';
import SignUp from './SignUp';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <AuthenticatedRoute
        exact path="/" component={Home} />
      <Route
        exact
        path="/users/new"
        component={SignUp}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;

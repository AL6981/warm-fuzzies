import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AuthenticatedRoute from './authentication/AuthenticatedRoute';
import Home from './Home';
import SignUp from './SignUp';
import FuzzyMenu from './FuzzyMenu';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/sign-up" component={SignUp} />
      <AuthenticatedRoute
        exact
        path="/menu"
        component={FuzzyMenu}
      />
    </Switch>
  </BrowserRouter>
);

export default Routes;

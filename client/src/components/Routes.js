import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AuthenticatedRoute from './authentication/AuthenticatedRoute';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      < Route exact path="/users/new" component={SignUp} />
      < Route exact path="/user-sessions/new" component={SignIn} />
      < AuthenticatedRoute exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

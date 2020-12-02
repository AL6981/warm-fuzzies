import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AuthenticatedRoute from './authentication/AuthenticatedRoute';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import NavBar from './NavBar';
import Welcome from './Welcome';
import Give from './Give';
import WarmFuzziesIndex from './WarmFuzziesIndex';

const Routes = () => (
  <BrowserRouter>
    < NavBar />
    <Switch>
      < Route exact path="/" component={Welcome} />
      < Route exact path="/users/new" component={SignUp} />
      < Route exact path="/user-sessions/new" component={SignIn} />
      < AuthenticatedRoute exact path="/home" component={Home} />
      < AuthenticatedRoute exact path="/warm-fuzzies/new" component={Give} />
      < AuthenticatedRoute exact path="/warm-fuzzies/index" component={WarmFuzziesIndex} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

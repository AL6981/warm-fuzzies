import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import AuthenticatedRoute from './authentication/AuthenticatedRoute';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import NavBar from './NavBar';
import GiveFuzzy from './GiveFuzzy';
import WarmFuzziesIndex from './WarmFuzziesIndex';
import WarmFuzziesGiven from "./WarmFuzziesGiven";
import WarmFuzziesReceived from "./WarmFuzziesReceived";
import BreadCrumbs from "./BreadCrumbs";

const Routes = () => (
  <BrowserRouter>
    < NavBar />
    <Switch className="flex">
      < AuthenticatedRoute Route exact path="/" component={WarmFuzziesIndex} />
      < Route exact path="/users/new" component={SignUp} />
      < AuthenticatedRoute Route exact path="/users/:id/warm-fuzzies/given" component={WarmFuzziesGiven} />
      < AuthenticatedRoute Route exact path="/users/:id/warm-fuzzies/received" component={WarmFuzziesReceived} />
      < Route exact path="/user-sessions/new" component={SignIn} />
      < AuthenticatedRoute exact path="/warm-fuzzies/new" component={GiveFuzzy} />
      < AuthenticatedRoute exact path="/warm-fuzzies/index" component={WarmFuzziesIndex} />
    </Switch>
  </BrowserRouter>
);

export default Routes;

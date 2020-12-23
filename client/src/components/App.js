import React from "react";
import { hot } from "react-hot-loader/root";
import Authentication from "../providers/Authentication";
import Routes from "./Routes";

import "../assets/scss/main.css";

const App = props => {
  return (
    <div className="px-5 font-raleway">
      <Authentication.AuthenticationProvider>
        <Routes />
      </Authentication.AuthenticationProvider>
    </div>
  );
};

export default hot(App);

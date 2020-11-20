import React from "react";
import { hot } from "react-hot-loader/root";
import Authentication from "../providers/Authentication";
import Routes from "./Routes";


import "../assets/scss/main.scss";

const App = props => {
  return (
    <Authentication.AuthenticationProvider>
      <Routes />
    </Authentication.AuthenticationProvider>
  );
};

export default hot(App);

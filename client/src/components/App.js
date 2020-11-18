import React from "react";
import { hot } from "react-hot-loader/root";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Authentication from "../providers/Authentication.js";
import Routes from "./Routes";


import "../assets/scss/main.scss";

const App = props => {
  return (
    <>
      <Authentication.AuthenticationProvider>
        <Routes />
      </Authentication.AuthenticationProvider>
    </>
  );
};

export default hot(App);

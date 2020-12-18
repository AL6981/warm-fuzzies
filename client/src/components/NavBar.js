import React from "react";
import { Link } from "react-router-dom";

import AuthenticationButton from "./AuthenticationButton";
import logo from "../assets/scss/images/small_fuzzy_logo.png";

const NavBar = () => (
  <nav className="inline-flex space-x-3 py-3">
    <Link className="flex-1" to="/">
      <img src={logo} alt="fuzzy-logo" />
    </Link>
    <Link to="/home" className="text-center flex-1 text-orange text-4xl font-bold">
      Warm Fuzzies
    </Link>
    <div className="text-center flex-1">
      <AuthenticationButton />
    </div>
    <hr />
  </nav>
);

export default NavBar;

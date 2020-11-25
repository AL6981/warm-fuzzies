import React from "react";
import { Link } from "react-router-dom";

import AuthenticationButton from "./AuthenticationButton";
import logo from "../assets/scss/images/logo_fuzzy.png";

const NavBar = () => (
  <>
    <nav>
      <div className="column">
        <div className="row">
          <Link to="/">
            <img className="h-10 rounded" src={logo} alt="fuzzy-logo" />
          </Link>
          <h2 className="text-2xl">
            <Link to="/home">
              Warm Fuzzies
              </Link>
          </h2>
          <AuthenticationButton />
        </div>
      </div>
    </nav>
    <hr />
  </>
);

export default NavBar;

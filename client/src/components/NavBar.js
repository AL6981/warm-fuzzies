import React from "react";
import { Link } from "react-router-dom";

import AuthenticationButton from "./AuthenticationButton";
import logo from "../assets/scss/images/small_fuzzy_logo.png";

const NavBar = () => (
  <>
    <nav className="inline-grid grid-cols-3 gap-x-4 py-3 bg-gradient-to-r from-red-dark via-red to-red-lightest shadow-2xl">
      <Link className="" to="/">
        <img src={logo} alt="fuzzy-logo" />
      </Link>
      <Link to="/home" className="place-self-center text-center font-quotes text-5xl font-bold">
        <p className="rounded-xl">Warm Fuzzies</p>
      </Link>
      <div className="grid text-center">
        <AuthenticationButton className="place-self-center" />
      </div>
    </nav>
    <hr className="py-3" />
  </>
);

export default NavBar;

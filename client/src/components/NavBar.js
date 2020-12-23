import React from "react";
import { Link } from "react-router-dom";

import AuthenticationButton from "./AuthenticationButton";
import logo from "../assets/scss/images/small_fuzzy_logo.png";

const NavBar = () => (
  <>
    <nav className="inline-grid grid-cols-3 gap-x-4 py-3 bg-gradient-to-r from-orange-dark via-orange to-orange-lightest shadow-2xl mt-5 rounded-2xl">
      <Link className="" to="/">
        <img src={logo} alt="fuzzy-logo" />
      </Link>
      <Link to="/" className="place-self-center text-center font-josefin text-5xl font-bold">
        <p className="rounded-xl">Warm Fuzzies</p>
      </Link>
      <div className="grid text-center">
        <AuthenticationButton className="place-self-center font-raleway" />
      </div>
    </nav>
  </>
);

export default NavBar;

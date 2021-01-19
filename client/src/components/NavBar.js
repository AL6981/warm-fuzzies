import React from "react";
import { Link } from "react-router-dom";
import Authentication from "../providers/Authentication";
import logo from "../assets/scss/images/logo_fuzzy.png";
import DisplayNav from "./DisplayNav.js"

const NavBar = () => {
  const { user } = Authentication.useAuthentication();

  return (
    <>
      <nav className="py-3 mt-5 rounded-2xl mb-10">
        <div className="grid grid-cols-3 gap-4 mb-10">
          <Link to="/" className="col-start-2 col-end-3 max-w-full text-center align-middle place-self-center">
            <img src={logo} alt="fuzzy-logo" />
          </Link>
          <Link to="/" className="col-start-1 col-end-4 text-center place-self-center font-rubik text-5xl pl-5 font-bold">
            <p className="rounded-xl">Launch Warm Fuzzies</p>
          </Link>
        </div>
        <hr className="mb-5" />
        <div className="grid">
          <DisplayNav />
        </div>
      </nav>
    </>
  )
};

export default NavBar;

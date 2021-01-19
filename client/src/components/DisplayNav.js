import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Authentication from "../providers/Authentication";

import AuthenticationButton from "./AuthenticationButton";
import logo from "../assets/scss/images/logo_fuzzy.png";


const DisplayNav = () => {
  const { user } = Authentication.useAuthentication();
  const [url, setUrl] = useState(null)
  const location = useLocation()

  useEffect(() => {
    let urlParams = location.pathname.split('/')
    let length = urlParams.length - 1
    let deets = urlParams[length]
    setUrl(deets)
  })


  return (
    user
      ? (
        <div className="grid grid-cols-4">
          <Link to="/warm-fuzzies/new" className={url == "new" ? `align-middle text-center text-xl underline` : "align-middle text-center text-xl"}>
            <p>GIVE</p>
          </Link>
          <Link to="/users/:id/warm-fuzzies/received" className={url == "received" ? `align-middle text-center text-xl underline` : "align-middle text-center text-xl"}>
            <p>RECEIVED</p>
          </Link>
          <Link to="/users/:id/warm-fuzzies/given" className={url == "given" ? `align-middle text-center text-xl underline` : "align-middle text-center text-xl"}>
            <p>GIVEN</p>
          </Link>
          <div className="justify-self-end pr-5">
            <AuthenticationButton />
          </div>
        </div>
      ) : (
        <div className="justify-self-end pr-5">
          <AuthenticationButton />
        </div>
      )
  )
};

export default DisplayNav;

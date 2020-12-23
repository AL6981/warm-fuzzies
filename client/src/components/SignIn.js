import React from "react";
import { Link } from 'react-router-dom'

import SignInForm from "./SignInForm.js";

const SignInBox = () => {
  return (
    <div>
      <h1 className="mb-5 text-4xl ">
        <p className="text-gray-lightest mt-3">Sign In</p>
      </h1>
      <SignInForm />
      <Link className="text-1xl text-gray-lightest mt-5 underline" to="/users/new">
        New to Warm Fuzzies? Sign Up!
      </Link>

    </div>
  );
};

export default SignInBox;

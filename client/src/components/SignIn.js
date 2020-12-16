import React from "react";
import { Link } from 'react-router-dom'

import SignInForm from "./SignInForm.js";

const SignInBox = () => {
  return (
    <div className="text-center">
      <div className="form-container">
        <h1 className="text-4xl"> Sign In </h1>

        <h4 className="font-thin my-3"> Sign In to your account. </h4>
        <SignInForm />

        <Link to="/users/new"> New to Warm Fuzzies? Sign Up! </Link>

      </div>
    </div>
  );
};

export default SignInBox;

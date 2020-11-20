import React from "react";

import SignInForm from "./SignInForm.js";

const SignInBox = () => {
  return (
    <div className="centered-box">
      <div className="form-container">
        <h1 className="text-4xl"> Sign In </h1>

        <h4 className="font-thin my-3"> Sign In to your account. </h4>

        <SignInForm />
      </div>
    </div>
  );
};

export default SignInBox;

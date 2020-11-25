import React from "react";
import { Link } from 'react-router-dom'

import "../assets/scss/main.scss";
import SignUpForm from "./SignUpForm";

const SignUp = props => {
  return (
    <div>
      <h4>SignUp</h4>
      <SignUpForm />
      <Link to="/user-sessions/new"> Already have an account? Sign In! </Link>
    </div>
  )
};

export default SignUp;

import React from "react";
import { Link } from 'react-router-dom'

import "../assets/scss/main.css";
import SignUpForm from "./SignUpForm";

const SignUp = props => {
  return (
    <div className="text-center text-red-900">
      <SignUpForm />
      <Link className="text-1xl text-gray-lightest mt-10 underline" to="/user-sessions/new"> Already have an account? Sign In! </Link>
    </div>
  )
};

export default SignUp;

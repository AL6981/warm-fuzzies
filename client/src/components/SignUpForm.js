import React, { useState } from "react";
import { useForm } from "react-hook-form";
import AuthenticationClient from "../apiClient/AuthenticationClient";

import "../assets/scss/main.scss";

const SignUpForm = props => {
  const { handleSubmit, register, errors } = useForm();
  const [redirectStatus, setRedirectStatus] = useState();
  // const onSubmit = values => console.log(values);

  const onSubmit = async (data) => {
    const client = new AuthenticationClient();
    const userSigninData = await client.signIn(data);
    if (userSigninData) {
      signIn(userSigninData);
      setRedirectStatus(true);
    }
  };

  if (redirectStatus) {
    return <Redirect to="/menu" />;
  }


  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="email"
        placeholder="Email"
        ref={register({
          required: "Required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "invalid email address"
          }
        })}
      />
      {errors.email && errors.email.message}

      <input
        name="username"
        placeholder="Username"
        ref={register({
          required: "Required",
        })}
      />
      {errors.username && errors.username.message}
      <input
        name="password"
        placeholder="Password"
        ref={register({
          required: "Required",
        })}
      />
      <button type="submit">Sign Up!</button>
    </form>
  );
};

export default SignUpForm;

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";

import AuthenticationClient from "../apiClient/AuthenticationClient";
import Authentication from "../providers/Authentication";

const SignInForm = () => {
  const { signIn } = Authentication.useAuthentication();

  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = async (data) => {
    const client = new AuthenticationClient();
    const userSigninData = await client.signIn(data);
    if (userSigninData) {
      signIn(userSigninData);
      setShouldRedirect(true);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to="/home" />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <div className="">
        <input
          className="p-2 rounded-md mb-2 input-field"
          type="text"
          name="email"
          id="email"
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
      </div>
      <div className="">
        <input
          className="p-2 mb-2 rounded-md input-field"
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          ref={register({
            required: "Password Required",
          })}
        />
      </div>
      <input className="p-1 mb-2 rounded-md bg-orange-light font-quote button button-center" type="submit" value="Login" />
    </form>
  );
};

export default SignInForm;

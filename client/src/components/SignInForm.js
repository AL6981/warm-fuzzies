import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
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

  const messageFunc = ({ messages, message }) => {
    let theMessage = message;
    if (messages && messages.length > 0) {
      (theMessage = messages.map((error) => error.message)), join(", ");
    }
    if (theMessage) {
      return <p className="error">{theMessage}</p>;
    }
    return null;
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form">
      <input
        className="input-field"
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
      <ErrorMessage errors={errors} name="email" render={messageFunc} />
      <input
        className="input-field"
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        ref={register({
          required: "Password Required"
        })}
      />
      <ErrorMessage errors={errors} name="password" render={messageFunc} />
      <input className="button button-center" type="submit" value="Login" />
    </form>
  );
};

export default SignInForm;

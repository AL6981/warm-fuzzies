import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import translateServerErrors from "../services/translateServerErrors";

import UserClient from "../apiClient/UserClient";

const SignUpForm = props => {
  const [shouldRedirect, setShouldRedirect] = useState();
  const { handleSubmit, register, errors, setError } = useForm({ criteriaMode: "all" });

  const onSubmit = async (data) => {
    const client = new UserClient();
    const postUserResponse = await client.postUser({ email: data.email, password: data.password });
    if (!postUserResponse.errors) {
      setShouldRedirect(true);
    } else {
      translateServerErrors(postUserResponse.errors, setError);
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          className="p-2 rounded-md mb-2 input-field"
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
        <ErrorMessage errors={errors} name="email" render={messageFunc} />
      </div>
      <div>
        <input
          className="p-2 mb-2 rounded-md input-field"
          name="password"
          placeholder="Password"
          ref={register({
            required: "Required",
            minLength: { value: 8, message: 'Password too short' }
          })}
        />
        <ErrorMessage errors={errors} name="password" render={messageFunc} />
      </div>
      <div>
        <input className="p-2 mb-2 rounded-md bg-blue font-quote button button-center" type="submit" value="Sign Up" />
      </div>
    </form >
  );
};

export default SignUpForm;

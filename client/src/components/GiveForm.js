import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";

import WarmFuzzyClient from "../apiClient/WarmFuzzyClient";
import Authentication from "../providers/Authentication";

const GiveForm = () => {
  const { user, createNewFuzzy } = Authentication.useAuthentication();
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = async (data) => {
    const client = new WarmFuzzyClient();
    const warmFuzzyData = await client.postFuzzy({ ...data, elevatorId: user.userId });
    if (warmFuzzyData) {
      setShouldRedirect(true);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to="/warm-fuzzies/index" />;
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
        name="title"
        id="title"
        placeholder="Title"
        ref={register({
          required: "Title Required",
        })}
      />
      <ErrorMessage errors={errors} name="title" render={messageFunc} />
      <input
        className="input-field"
        type="description"
        name="description"
        id="description"
        placeholder="Give the deets!"
        ref={register({
          required: "Description Required",
        })}
      />
      <ErrorMessage errors={errors} name="description" render={messageFunc} />
      <input
        className="input-field"
        type="recipientId"
        name="recipientId"
        id="recipientId"
        placeholder="Who gets this fuzzy?"
        ref={register({
          required: true,
        })}
      />
      <ErrorMessage errors={errors} name="recipientId" render={messageFunc} />

      <input className="button button-center" type="submit" value="Give it!" />
    </form>
  );
};

export default GiveForm;

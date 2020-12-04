import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import Select from 'react-select';
import WarmFuzzyClient from "../apiClient/WarmFuzzyClient";
import Authentication from "../providers/Authentication";
import UserClient from "../apiClient/UserClient";

const GiveForm = () => {
  const { user } = Authentication.useAuthentication();
  const [allUsers, setAllUsers] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { handleSubmit, register, errors, reset, control } = useForm();

  const onSubmit = async (data) => {
    const client = new WarmFuzzyClient();
    const warmFuzzyData = await client.postFuzzy({ ...data, elevatorId: user.userId, recipientId: data.recipientId.value });
    if (warmFuzzyData) {
      setShouldRedirect(true);
    }
  };

  if (shouldRedirect) {
    return <Redirect push to="/warm-fuzzies/index" />;
  }

  useEffect(() => {
    const client = new UserClient();
    const allUsersData = client.getAllUsers()
      .then(resp => {
        return resp;
      })
      .then(users => {
        setAllUsers(users)
      })
  }, []);

  const options = allUsers.map(user => {
    return {
      value: user.id,
      label: user.email
    }
  })

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
        name="description"
        id="description"
        placeholder="Give the deets!"
        ref={register({
          required: "Description Required",
        })}
      />
      <ErrorMessage errors={errors} name="description" render={messageFunc} />
      <Controller
        name="recipientId"
        as={Select}
        options={options}
        className="input-field"
        id="recipientId"
        control={control}
        rules={{ required: true }}
        defaultValue={0}
      />
      <ErrorMessage errors={errors} name="recipientId" render={messageFunc} />

      <input className="button button-center" type="submit" value="Give it!" />
    </form>
  );
};

export default GiveForm;

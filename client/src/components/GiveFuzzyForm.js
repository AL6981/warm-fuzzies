import React, { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Redirect } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import Select from 'react-select';
import WarmFuzzyClient from "../apiClient/WarmFuzzyClient";
import Authentication from "../providers/Authentication";
import UserClient from "../apiClient/UserClient";

const GiveFuzzyForm = () => {
  const { user } = Authentication.useAuthentication();
  const [allUsers, setAllUsers] = useState([]);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const { handleSubmit, register, errors, reset, control } = useForm();

  const onSubmit = async (data) => {
    const client = new WarmFuzzyClient();
    const warmFuzzyData = await client.postFuzzy({ ...data, elevatorId: user.userId, recipientId: data.recipientId.value });
    setShouldRedirect(true);
  };

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

  if (shouldRedirect) {
    return <Redirect push to="/warm-fuzzies/index" />;
  }

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
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div>
          <input
            className="input-field max-w-md col-span-2 m-4 p-2 rounded-2xl"
            name="title"
            id="title"
            placeholder="Title"
            ref={register({
              required: "Title Required",
            })}
          />
          <ErrorMessage errors={errors} name="title" render={messageFunc} />
        </div>
        <div>
          <input
            className="input-field max-w-md col-span-2 mb-4 ml-4 p-2 pb-10 rounded-2xl"
            name="description"
            id="description"
            placeholder="Give the deets!"
            ref={register({
              required: "Description Required",
            })}
          />
          <ErrorMessage errors={errors} name="description" render={messageFunc} />
        </div>
        <div>
          <Controller
            name="recipientId"
            as={Select}
            options={options}
            className="input-field max-w-md col-span-2 mb-4 ml-2 p-2 rounded-2xl"
            id="recipientId"
            control={control}
            rules={{ required: true }}
            defaultValue={0}
          />
          <ErrorMessage errors={errors} name="recipientId" render={messageFunc} />
        </div>
        <input className="p-2 mb-2 ml-4 rounded-md bg-blue font-quote button button-center" type="submit" value="Give it!" />
      </form>
    </>
  );
};

export default GiveFuzzyForm;

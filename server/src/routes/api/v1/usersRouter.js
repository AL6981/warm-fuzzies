import express from "express";
import objection from "objection";

import User from "../../../models/User.js";

const usersRouter = new express.Router();
const { ValidationError } = objection;

usersRouter.post("/", async (req, res) => {
  const { user, body } = req;
  console.log(user)
  console.log(body)
  const { email, password } = body;
  let newUser = new User();
  newUser.email = email;
  newUser.password = password;
  console.log(newUser)

  try {
    newUser = await newUser.$query().insert();
    console.log(newUser)
    // await user.$query().patch();
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    throw error;
  }

  return res.status(201).json({ user: newUser });
});

export default usersRouter;

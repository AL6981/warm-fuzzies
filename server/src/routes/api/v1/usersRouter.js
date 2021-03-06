import express from "express";
import objection from "objection";

import User from "../../../models/User.js";

const usersRouter = new express.Router();
const { ValidationError } = objection;

usersRouter.post("/", async (req, res) => {
  const { user, body } = req;
  const { email, password } = body;
  let newUser = new User();
  newUser.email = email;
  newUser.password = password;

  try {
    newUser = await newUser.$query().insert();
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    throw error;
  }

  return res.status(201).json({ user: newUser });
});

export default usersRouter;

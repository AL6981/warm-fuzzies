import express from "express";
import objection from "objection";

import User from "../../../models/User.js";
import WarmFuzzy from "../../../models/WarmFuzzy.js";

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

  // const fuzziesAsElevator = await newUser.$relatedQuery("givenWarmFuzzies")

  return res.status(201).json({ user: newUser });
});

usersRouter.get("/elevations", async (req, res) => {
  debugger
  const user = await User.query().findById(req.user.id);
  debugger
  const elevations = await WarmFuzzy.query().select('elevatorId').where('elevatorId', 'user.id');
  debugger
  console.log(elevations)
})

export default usersRouter;

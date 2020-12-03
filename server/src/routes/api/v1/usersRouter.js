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

// usersRouter.get("/elevations", async (req, res) => {
//   const user = await User.query().findById(req.user.id);
//   const elevations = await WarmFuzzy.query().select('elevatorId').where('elevatorId', 'user.id');
//   console.log(elevations)
// })

usersRouter.get("/all-users", async (req, res) => {
  const allUsers = await User.query();
  const serializedUsers = allUsers.map(user => {
    return { value: user.id, name: user.email }
  })
  return res.status(201).json(allUsers);
})

export default usersRouter;

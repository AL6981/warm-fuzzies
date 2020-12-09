import express from "express";
import objection from "objection";

import User from "../../../models/User.js";
import WarmFuzzy from "../../../models/WarmFuzzy.js";
import { receivedFuzzySerializer } from "../../../serializers/receivedFuzzySerializer.js";
import { givenFuzzySerializer } from "../../../serializers/givenFuzzySerializer.js";

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

usersRouter.get("/:id/warm-fuzzies/given", async (req, res) => {
  const user = await User.query().findById(req.params.id);
  const elevations = await WarmFuzzy.query().select('createdAt', 'title', 'description', 'recipientId', 'elevatorId').where('elevatorId', `${user.id}`);

  const promises = elevations.map(fuzzy => {
    return givenFuzzySerializer(fuzzy)
  })
  const serializedFuzzies = await Promise.all(promises)

  return res?.status(201).json(serializedFuzzies);
})

usersRouter.get("/:id/warm-fuzzies/received", async (req, res) => {
  const user = await User.query().findById(req.params.id);
  const elevations = await WarmFuzzy.query().select('createdAt', 'title', 'description', 'recipientId', 'elevatorId').where('recipientId', `${user.id}`);

  const promises = elevations.map(fuzzy => {
    return receivedFuzzySerializer(fuzzy)
  })
  const serializedFuzzies = await Promise.all(promises)

  return res?.status(201).json(serializedFuzzies);
})

usersRouter.get("/all-users", async (req, res) => {
  const allUsers = await User.query();
  const serializedUsers = allUsers.map(user => {
    return { value: user.id, name: user.email }
  })
  return res.status(201).json(allUsers);
})

export default usersRouter;

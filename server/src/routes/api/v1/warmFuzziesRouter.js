import express from "express";
import objection from "objection";
import WarmFuzzy from "../../../models/WarmFuzzy.js";
import allFuzziesSerializer from "../../../serializers/allFuzziesSerializer.js"

const warmFuzziesRouter = new express.Router();

const { ValidationError } = objection;

warmFuzziesRouter.post("/", async (req, res) => {
  const { user, body } = req;
  const { title, description, elevatorId, recipientId } = body;
  let newWarmFuzzy = new WarmFuzzy();
  newWarmFuzzy.title = title;
  newWarmFuzzy.description = description;
  newWarmFuzzy.elevatorId = elevatorId;
  newWarmFuzzy.recipientId = recipientId;

  try {
    newWarmFuzzy = await newWarmFuzzy.$query().insert();
  } catch (error) {
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data });
    }
    throw error;
  }

  return res.status(201).json({ warmFuzzy: newWarmFuzzy });
});

warmFuzziesRouter.get("/", async (req, res) => {
  let warmFuzzies = await WarmFuzzy.query();
  const promises = warmFuzzies.map(fuzzy => {
    return allFuzziesSerializer(fuzzy)
  })
  const serializedFuzzies = await Promise.all(promises);
  return res.status(201).json(serializedFuzzies);
})

export default warmFuzziesRouter;
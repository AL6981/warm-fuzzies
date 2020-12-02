import express from "express";
import objection from "objection";
import WarmFuzzy from "../../../models/WarmFuzzy.js";

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

warmFuzziesRouter.get("/index", async (req, res) => {
  const warmFuzzies = await WarmFuzzy.query();
  return res.status(201).json(warmFuzzies);
})

export default warmFuzziesRouter;
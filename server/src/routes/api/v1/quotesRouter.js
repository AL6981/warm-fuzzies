import express from "express";
import got from "got";

const quotesRouter = new express.Router();

quotesRouter.get("/", async (req, res) => {
  try {
    const url = 'https://api.quotable.io/random'
    const apiResponse = await got(url)
    const randomQuote = apiResponse.body
    return res.status(201).json({ randomQuote });
  } catch (error) {
    return { error: error.message };
  }
});

export default quotesRouter;

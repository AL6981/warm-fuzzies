import express from "express";
import clientRouter from "./clientRouter.js";
import api from "./api.js";

const rootRouter = new express.Router();

//place your server-side routes here
rootRouter.use("/api", api)

rootRouter.use("/", clientRouter);

export default rootRouter;

import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router();
const clientRoutes = ["/", "/users/new", "/user-sessions/new", "/user-sessions/sign-out", "/warm-fuzzies/new", "/warm-fuzzies/index"];

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;

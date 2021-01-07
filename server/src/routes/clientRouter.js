import express from "express";
import getClientIndexPath from "../config/getClientIndexPath.js";

const router = new express.Router();

const clientRoutes = ["/", "/users/new", "/users/all-users", "/user-sessions/new", "/users/:id/warm-fuzzies/given", "/users/:id/warm-fuzzies/received", "/user-sessions/sign-out", "/warm-fuzzies/new", "/warm-fuzzies", "/quotes"];

router.get(clientRoutes, (req, res) => {
  res.sendFile(getClientIndexPath());
});

export default router;

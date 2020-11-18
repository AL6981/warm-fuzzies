import express from "express";
import passport from "passport";

const sessionRouter = new express.Router();

sessionRouter.post("/register", (req, res, next) => {
  //what is happening here with "local"
  return passport.authenticate("local", (err, user) => {
    if (err) {
      // eslint-disable-next-line no-console
      console.log(err);
    }

    if (user) {
      req.login(user, () => {
        return res.status(201).json({ userId: user.id });
      });
    }

    return res.status(401).json(undefined);
  })(req, res, next);
});

sessionRouter.get("/current", (req, res) => {
  if (req.user) {
    res.status(200).json(req.user);
  } else {
    res.status(401).json(undefined);
  }
});

export default sessionRouter;

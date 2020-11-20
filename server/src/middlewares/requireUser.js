const requireUser = () => {
  return (req, res, next) => {
    if (!req.user) {
      return res.redirect("/users/new");
    }
    return next();
  };
};

export default requireUser;

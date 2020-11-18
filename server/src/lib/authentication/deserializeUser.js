import User from "../../models/User.js";

export default (id, done) => {
  User.findById(id).then((user) => done(null, user));
};

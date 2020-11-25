// eslint-disable-next-line import/no-extraneous-dependencies
const Bcrypt = require("bcrypt");
const Model = require("./Model");

const saltRounds = 10;
class User extends Model {
  static get tableName() {
    return "users";
  }

  $beforeInsert() {
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
  $beforeUpdate() {
    this.updatedAt = new Date();
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }
}
module.exports = User;
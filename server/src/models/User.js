// eslint-disable-next-line import/no-extraneous-dependencies
const Model = require("./Model");

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
}
module.exports = User;
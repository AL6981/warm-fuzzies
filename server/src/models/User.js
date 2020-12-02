// eslint-disable-next-line import/no-extraneous-dependencies
const Bcrypt = require("bcrypt");
const Model = require("./Model");
const WarmFuzzy = require("./WarmFuzzy");

const saltRounds = 10;
class User extends Model {
  static get tableName() {
    return "users";
  }

  static get relationMappings() {
    const WarmFuzzy = require("./WarmFuzzy")
    return {
      givenWarmFuzzies: {
        relation: Model.HasManyRelation,
        modelClass: WarmFuzzy,
        join: {
          from: "users.id",
          to: "warmFuzzies.elevatorId"
        }
      },
      receivedWarmFuzzies: {
        relation: Model.HasManyRelation,
        modelClass: WarmFuzzy,
        join: {
          from: "users.id",
          to: "warmFuzzies.recipientId"
        }
      }
    }
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }
}
module.exports = User;
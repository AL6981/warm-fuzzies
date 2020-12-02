// eslint-disable-next-line import/no-extraneous-dependencies
const Model = require("./Model");

class WarmFuzzy extends Model {
  static get tableName() {
    return "warmFuzzies";
  }

  static get relationMappings() {
    const User = require("./User")

    return {
      elevator: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "warmFuzzies.elevatorId",
          to: "users.id",
        }
      },
      recipient: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "warmFuzzies.recipientId",
          to: "users.id"
        }
      }
    }
  }

}
module.exports = WarmFuzzy;
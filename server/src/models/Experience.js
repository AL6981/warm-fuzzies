// eslint-disable-next-line import/no-extraneous-dependencies
const { default: usersRouter } = require("../routes/api/v1/usersRouter");
const Model = require("./Model");

class Experience extends Model {
  static get tableName() {
    return "experiences";
  }

  static get relationMappings() {
    const User = require("./User")

    return {
      elevator: {
        relation: Model.BelongsToOneRelation,
        modelClass: User,
        join: {
          from: "user.id",
          to: "warmFuzzy.elevatorId"
        }
      }
    }
  }

}
module.exports = Experience;
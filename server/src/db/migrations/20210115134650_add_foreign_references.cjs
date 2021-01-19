
const tableName = "warmFuzzies";
/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
  const tableExists = await knex.schema.hasTable(tableName);
  if (!tableExists) {
    return knex.schema.table('warmFuzzies', (table) => {
      table.bigInteger("elevatorId").unsigned().index().references("user.id")
      table.bigInteger("recipientId").unsigned().index().references("user.id")
    })
  }
};

/**
 * @param {Knex} knex
 */
exports.down = function (knex) { };

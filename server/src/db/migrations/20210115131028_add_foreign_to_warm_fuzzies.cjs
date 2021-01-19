/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
const tableName = "warmFuzzies";

exports.up = async (knex) => {
  const tableExists = await knex.schema.hasTable(tableName);
  if (!tableExists) {
    return knex.schema.dropColumns((elevatorId, recipientId))
  }
};

/**
 * @param {Knex} knex
 */
exports.down = function (knex) { };

/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable("users", (table) => {
        table.string("address").notNullable()
        table.string("city").notNullable()
        table.string("state").notNullable()
        table.integer("zip").notNullable()
        table.string("country")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {}

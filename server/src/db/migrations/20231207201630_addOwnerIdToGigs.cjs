/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.alterTable('gigs', (table) => {
        table.integer('ownerId').notNullable()
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.table('gigs', (table) => {
        table.dropColumn('ownerId')
    })
}

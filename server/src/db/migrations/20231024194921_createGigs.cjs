/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable('gigs', (table) => {
        table.bigIncrements('id')
        table.string('gigName').notNullable()
        table.text('description').notNullable()
        table.string('location').notNullable()
        table.string('datePosted').notNullable()
        table.string('gigExpirationDate').notNullable()
        table.string('duration')
        table.string('compensation').notNullable()
        table.string('gigCategory').notNullable()
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    console.log(`Rolling back ${tableName}`);
    return knex.schema.dropTableIfExists('gigs');
}

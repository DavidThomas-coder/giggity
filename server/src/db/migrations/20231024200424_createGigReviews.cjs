/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable('gigReviews', (table) => {
        table.bigIncrements('id')
        table.text('reviewBody')
        table.integer('rating').notNullable()
        table
            .bigInteger('userId')
            .unsigned()
            .notNullable()
            .index()
            .references('users.id')
        table
            .bigInteger('gigId')
            .unsigned()
            .notNullable()
            .index()
            .references('gigs.id')
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
        // console.log(`Rolling back ${tableName}`);
        return knex.schema.dropTableIfExists("gigReviews");
}

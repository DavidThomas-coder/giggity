/**
 * @typedef {import("knex")} Knex
 */

/**
 * @param {Knex} knex
 */
exports.up = async (knex) => {
    return knex.schema.createTable("applications", (table) => {
        table.bigIncrements("id")
        table
            .bigInteger("userId")
            .unsigned()
            .references("users.id")
            .index()
            .notNullable()
        table
            .bigInteger("gigId")
            .unsigned()
            .references("gigs.id")
            .index()
            .notNullable()
        table.text("applicationBody").notNullable()
        table.timestamp("createdAt").notNullable().defaultTo(knex.fn.now());
        table.timestamp("updatedAt").notNullable().defaultTo(knex.fn.now());
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    console.log(`Rolling back ${tableName}`);
    return knex.schema.dropTableIfExists("applications");
}

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
        table.string("country").notNullable()
        table.integer("phoneNumber").notNullable()
        table.string("imageUrl")
        table.text("resumeFile")
        table.text("bio")
        table.text("recentGig1")
        table.text("recentGig2")
        table.text("recentGig3")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {}

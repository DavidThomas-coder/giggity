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
        table.string("bio").notNullable()
        table.text("skills").notNullable()
        table.text("recentGig1")
        table.text("recentGig2")
        table.text("recentGig3")
    })
}

/**
 * @param {Knex} knex
 */
exports.down = (knex) => {
    return knex.schema.table("users", (table) => {
        table.dropColumn("address")
        table.dropColumn("city")
        table.dropColumn("state")
        table.dropColumn("zip")
        table.dropColumn("country")
        table.dropColumn("phoneNumber")
        table.dropColumn("imageUrl")
        table.dropColumn("resumeFile")
        table.dropColumn("bio")
        table.dropColumn("skills")
        table.dropColumn("recentGig1")
        table.dropColumn("recentGig2")
        table.dropColumn("recentGig3")
    })
}

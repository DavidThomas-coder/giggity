const Model = require ('./Model')

class Application extends Model {
    static get tableName() {
        return 'applications'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['applicationBody'],
            properties: {
                applicationBody: { type: 'string' }
            }
        }
    }

    static get relationMappings() {
        const { User, Gig } = require('./index.js');

        return {
            gigs: {
                relation: Model.BelongsToOneRelation,
                modelClass: Gig,
                join: []
            }
        }
    }
}

module.exports = Application
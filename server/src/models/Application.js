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
                join: {
                    from: 'applications.gigId',
                    to: 'gigs.id',
                }
            },

            users: {
                relation: Model.BelongsToOneRelation,
                modelClass: User,
                join: {
                    from: 'applications.userId',
                    to: 'users.id'
                }
            }
        }
    }
}

module.exports = Application
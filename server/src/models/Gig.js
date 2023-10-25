const Model = require ('./Model')

class Gig extends Model {
    static get tableName() {
        return 'gigs'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['gigName', 'description', 'location', 'datePosted', 'gigExpirationDate', 'compensation', 'gigCategory'],
            properties: {
                gigName: { type:'string' },
                description: { type:'string' },
                location: { type:'string' },
                datePosted: { type:'string' },
                gigExpirationDate: { type:'string' },
                compensation: { type:'integer' },
                gigCategory: { type:'string' }
        }
    }
}

    static get relationMappings() {
        const { User, Application } = require('./index.js')

        return {
            users: {
                relation: Model.ManyToManyRelation,
                modelClass: User,
                join: {
                    from: 'gigs.id',
                    through: {
                        from: 'applications.gigId',
                        to: 'applications.userId',
                    },
                    to: 'users.id'
                }
            },
            applications: {
                relation: Model.HasManyRelation,
                modelClass: Application,
                join: {
                    from: 'gigs.id',
                    to: 'applications.gigId'
                }
            }

        }
    }
}
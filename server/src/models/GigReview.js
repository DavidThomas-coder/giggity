const Model = require('./Model');

class GigReview extends Model {
    static get tableName() {
        return 'gigReviews';
    }
    static get jsonSchema() {
        return {
            type: 'object',
            required: ['rating'],
            properties: {
                reviewBody: { type:'string' },
                rating: { type:[ 'integer', 'string'] },
            }
        }
    }
    static get relationMappings() {
        const { User, Gig } = require('./index.js')
            return {
                user: {
                    relation: Model.BelongsToOneRelation,
                    modelClass: User,
                    join: { 
                        from: 'gigReviews.userId', 
                        to: 'users.id' 
                    },
                gig: {
                    relation: Model.BelongsToOneRelation,
                    modelClass: Gig,
                    join: {
                        from: 'gigReviews.gigId',
                        to: 'gigs.id'
                    }
                }
            }
        }
    }
}

module.exports = GigReview;
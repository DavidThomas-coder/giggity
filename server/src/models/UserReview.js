const Model = require('./Model');

class UserReview extends Model {
    static get tableName() {
        return 'userReviews';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['rating'],
            properties: {
                rating: {type: ['integer', 'string']},
                reviewBody: {type: 'string'},
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
                        from: 'userReviews.userId',
                        to: 'users.Id'
                    },
                gig: {
                    relation: Model.BelongsToOneRelation,
                    modelClass: Gig,
                    join: {
                        from: 'userReviews.userId',
                        to: 'gigs.id'
                    }
                }
            }
        }
    }
}

module.exports = UserReview;
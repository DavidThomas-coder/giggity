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
    }
}
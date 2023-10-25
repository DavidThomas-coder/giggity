const Model = require ('./Model')

class Gig extends Model {
    static get tableName() {
        return 'gigs'
    }

    static get relationMappings() {
        const { User }
    }
}
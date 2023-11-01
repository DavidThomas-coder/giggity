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
}

module.exports = Application
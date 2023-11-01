/* eslint-disable import/no-extraneous-dependencies */
const Bcrypt = require("bcrypt");
const unique = require("objection-unique");
const Model = require("./Model");

const saltRounds = 10;

const uniqueFunc = unique({
  fields: ["email"],
  identifiers: ["id"],
});

class User extends uniqueFunc(Model) {
  static get tableName() {
    return "users";
  }

  set password(newPassword) {
    this.cryptedPassword = Bcrypt.hashSync(newPassword, saltRounds);
  }

  authenticate(password) {
    return Bcrypt.compareSync(password, this.cryptedPassword);
  }

  static get jsonSchema() {
    return {
      type: "object",
      required: ["email", "address", "city", "state", "zip", "country", "phoneNumber", "bio", "skills"],

      properties: {
        email: { type: "string", pattern: "^\\S+@\\S+\\.\\S+$" },
        cryptedPassword: { type: "string" },
        firstName: { type: "string" },
        lastName: { type: "string" },
        username: { type: "string" },
        address: { type: 'string' },
        city: { type: 'string' },
        state: { type: 'string' },
        zip: { type: ['integer', 'string'] },
        country: { type: 'string' },
        phoneNumber: { type: ['integer', 'string'] },
        bio: { type: 'string' },
        skills: { type: 'string' },
        imageUrl: { type: 'string' },
        resumeFile: { type: 'string' },
        recentGig1: { type: 'string' },
        recentGig2: { type: 'string' },
        recentGig3: { type: 'string' },
      },
    };
  }

  $formatJson(json) {
    const serializedJson = super.$formatJson(json);

    if (serializedJson.cryptedPassword) {
      delete serializedJson.cryptedPassword;
    }

    return serializedJson;
  }
  static get relationMappings() {
    const { Gig, GigReview, UserReview } = require("./index.js");

      return {
        gigs: {
          relation: Model.ManyToManyRelation,
          modelClass: Gig,
          join: {
            from: 'users.id',
            through: {
              from: 'applications.userId',
              to: 'applications.gigId',
            },
            to: 'gigs.id'
          }
        },
        gigReviews: {
          relation: Model.HasManyRelation,
          modelClass: GigReview,
          join: { 
            from: 'users.id',
            to: 'gigReviews.userId'
        }
      },
      UserReview: {
        relation: Model.HasManyRelation,
        modelClass: UserReview,
        join: {
          from: 'users.id',
          to: 'userReviews.userId'
        }
      }
    }
  }
}
module.exports = User;

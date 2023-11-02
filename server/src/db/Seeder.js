/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"
import GigSeeder from "./seeders/GigSeeder.js"
import UserReviewSeeder from "./seeders/UserReviewSeeder.js"
import GigReviewSeeder from "./seeders/GigReviewSeeder.js"


class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Seeding users...")
    await UserSeeder.seed()

    console.log("Seeding gigs...")
    await GigSeeder.seed()

    console.log("Seeding user reviews...")
    await UserReviewSeeder.seed()

    console.log("Seeding gig reviews...")
    await GigReviewSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
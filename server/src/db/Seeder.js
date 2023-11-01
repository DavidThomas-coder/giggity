/* eslint-disable no-console */
import { connection } from "../boot.js"
import UserSeeder from "./seeders/UserSeeder.js"

class Seeder {
  static async seed() {
    // include individual seed commands here
    console.log("Seeding users...")
    await UserSeeder.seed()

    console.log("Done!")
    await connection.destroy()
  }
}

export default Seeder
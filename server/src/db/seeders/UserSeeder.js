import { User } from "../models/index.js"

class UserSeeder {
    static async seed() {
        const userData = [
            {
                username: "RipNasty",
                email: "david@david.com",
                password: "123",
                address: "66 Big Palace Road",
                city: "Somerville",
                state: "MA",
                zip: "02138",
                country: "USA",
                phoneNumber: "555-555-5555",
                bio: "I am the best at the moment",
                skills: ["welding", "cooking", "dressage", "slathering"]
            },
            {
                username: "Todd",
                email: "todd@todd.com",
                password: "123",
                address: "67 Big Palace Road",
                city: "Somerville",
                state: "MA",
                zip: "02138",
                country: "USA",
                phoneNumber: "555-555-5555",
                bio: "Cooler than that guy",
                skills: ["kewl"]
            },
            {
                username: "Jimmy",
                email: "jimmy@jimmyjohns.com",
                password: "123",
                address: "68 Big Palace Road",
                city: "Somerville",
                state: "MA",
                zip: "02138",
                country: "USA",
                phoneNumber: "555-555-5555",
                bio: "Slightly late but will get the gig done",
                skills: ["arriving late", "baking bread", "cooking", "dressing", "eating"]
            }
        ]

        for (const singleUser of userData) {
            const currentUser = await User.query().findOne({username: singleUser.username})
            if (!currentUser) {
                await User.query().insert(singleUser)
            }
        }
    }
}

export default UserSeeder
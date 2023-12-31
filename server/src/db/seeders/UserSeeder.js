import { User } from "../../models/index.js"

class UserSeeder {
    static async seed() {
        const userData = [
            {
                username: "RipNasty",
                firstName: "David",
                lastName: "Thomas",
                email: "david@david.com",
                password: "123",
                address: "66 Big Palace Road",
                city: "Somerville",
                state: "MA",
                zip: "02138",
                country: "USA",
                phoneNumber: "5555555555",
                bio: "I am the best at the moment",
                skills: "Welding, Cooking, Slathering"
            },
            {
                username: "Todd",
                firstName: "Todd",
                lastName: "Garrison",
                email: "todd@todd.com",
                password: "123",
                address: "67 Big Palace Road",
                city: "Somerville",
                state: "MA",
                zip: "02138",
                country: "USA",
                phoneNumber: "5555555555",
                bio: "Cooler than that guy",
                skills: "Kewl"
            },
            {
                username: "Jimmy",
                firstName: "Solomon",
                lastName: "Montagno",
                email: "jimmy@jimmyjohns.com",
                password: "123",
                address: "68 Big Palace Road",
                city: "Somerville",
                state: "MA",
                zip: "02138",
                country: "USA",
                phoneNumber: "5555555555",
                bio: "Slightly late but will get the gig done",
                skills: "Arriving late and baking bread"
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
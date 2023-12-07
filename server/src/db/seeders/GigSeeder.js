import { Gig } from "../../models/index.js";

class GigSeeder {
    static async seed() {


        const gigData = [
          {
            gigName: "Help with carrying AC",
            description: "I need help with carrying AC to basement",
            location: "Somerville, MA",
            datePosted: "11-1-2023",
            gigExpirationDate: "11-10-2023",
            duration: "10 minutes",
            compensation: "$20",
            gigCategory: "Manual labor",
            ownerId: "1",
          },
          {
            gigName: "Basting a turkey",
            description: "Girlfriend's dad is Gordon Ramsey and I need to impress him",
            location: "Somerville, MA",
            datePosted: "11-1-2023",
            gigExpirationDate: "11-23-2023",
            duration: "four hours",
            compensation: "$6000",
            gigCategory: "Cooking",
            ownerId: "2",
          },
          {
            gigName: "Lost in Elden Ring",
            description:
              "I need help figuring out what to with my tarnished souls and where I am in the game",
            location: "Medford, MA",
            datePosted: "11-1-2023",
            gigExpirationDate: "11-17-2023",
            duration: "A long as it takes",
            compensation: "$200",
            gigCategory: "Gaming",
            ownerId: "3",
          },
        ];

        for (const singleGigData of gigData) {
            const currentGig = await Gig.query().findOne({ gigName: singleGigData.gigName })
            if (!currentGig) {
                await Gig.query().insert(singleGigData)
            }
        }
    }
}


export default GigSeeder;
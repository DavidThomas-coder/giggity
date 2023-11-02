import { User, Gig, GigReview } from "../../models/index.js";

class GigReviewSeeder {
    static async seed() {

        const gig1 = await Gig.query().findById(1)
        const gig2 = await Gig.query().findById(2)
        const gig3 = await Gig.query().findById(3)

        const user1 = await User.query().findById(1)
        const user2 = await User.query().findById(2)
        const user3 = await User.query().findById(3)

        const gigReviewData = [
            {
                reviewBody: "Gordon Ramsey sucks",
                rating: "5",
                gigId: gig2.id,
                userId: user1.id
            },
            {
                reviewBody: "It's a spicy AC",
                rating: "1",
                gigId: gig1.id,
                userId: user2.id
            },
            {
                reviewBody: "I'm so sad",
                rating: "4",
                gigId: gig3.id,
                userId: user3.id
            }
        ]

        for (const singleGigReview of gigReviewData) {
            const currentGigReview = await GigReview.query().findOne({reviewBody: singleGigReview.reviewBody})
            if (!currentGigReview) {
                await GigReview.query().insert(singleGigReview)
            }
        }
    }
}

export default GigReviewSeeder
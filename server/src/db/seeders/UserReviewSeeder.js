import { User, Gig, UserReview } from "../../models/index.js";

class UserReviewSeeder {
    static async seed() {
        // const user1David = await User.query().findById(1)
        // const user2Todd = await User.query().findById(2)
        // const user3Solomon = await User.query().findById(3)

        const gig1 = await Gig.query().findById(1)
        const gig2 = await Gig.query().findById(2)
        const gig3 = await Gig.query().findById(3)

        const userReviewData = [
            {
                reviewBody: "David slathered everywhere it ruled",
                rating: "5",
                gigId: gig2.id,
                userId: 1
            },
            {
                reviewBody: "Todd is so ripped ez",
                rating: "1",
                gigId: gig1.id,
                userId: 2
            },
            {
                reviewBody: "Why is Solomon's name Jimmy",
                rating: "3",
                gigId: gig3.id,
                userId: 3
            }
        ]

        for (const singleUserReview of userReviewData) {
            const currentUserReview = await UserReview.query().findOne({reviewBody: singleUserReview.reviewBody})
            if (!currentUserReview) {
                await UserReview.query().insert(singleUserReview)
            }
        }
    }
}

export default UserReviewSeeder
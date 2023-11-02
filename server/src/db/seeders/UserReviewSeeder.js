import { User, Gig, UserReview } from "../../models/index.js";

class UserReviewSeeder {
    static async seed() {

        const userReviewData = [
            {
                reviewBody: "David slathered everywhere it ruled",
                rating: "5",
                gigId: 2,
                userId: 1
            },
            {
                reviewBody: "Todd is so ripped ez",
                rating: "1",
                gigId: 1,
                userId: 2
            },
            {
                reviewBody: "Why is Solomon's name Jimmy",
                rating: "3",
                gigId: 3,
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
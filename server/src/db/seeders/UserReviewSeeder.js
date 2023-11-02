import { User, Gig, UserReview } from "../../models/index.js";

class UserReviewSeeder {
    static async seed() {

        const userReviewData = [
            {
                reviewBody: "David slathered everywhere it ruled",
                rating: "5",
                gigId: 1,
                userId: 1
            }
        ]
    }
}
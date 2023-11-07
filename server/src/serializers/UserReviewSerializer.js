class UserReviewSerializer {
    static showUserReviewDetails(userReview) {
        const allowedAttributes = [
            "reviewBody",
            "rating"
        ]
        let serializedUserReview = {}

        for (const attribute of allowedAttributes) {
            serializedUserReview[attribute] = userReview[attribute]
        }
        return serializedUserReview 
    }
}

export default UserReviewSerializer
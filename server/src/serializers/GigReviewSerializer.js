class GigReviewSerializer {
    static showGigReviewDetails(gigReview) {
        const allowedAttributes = [
            "reviewBody",
            "rating"
        ]
        let serializedGigReview = {}

        for (const attribute of allowedAttributes) {
            serializedGigReview[attribute] = gigReview[attribute]
        }
        return serializedGigReview
    }
}

export default GigReviewSerializer
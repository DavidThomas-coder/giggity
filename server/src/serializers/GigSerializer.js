class GigSerializer {
    static showGigDetails(gig) {
        const allowedAttributes = [
            'gigName', 
            'description', 
            'location',
            'datePosted', 
            'gigExpirationDate', 
            'duration', 
            'compensation', 
            'gigCategory'
        ]
        let serializedGig = {}

        for (const attribute of allowedAttributes) {
            serializedGig[attribute] = gig[attribute]
        }
        return serializedGig
    }
}

export default GigSerializer
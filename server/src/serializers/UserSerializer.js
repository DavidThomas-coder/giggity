class UserSerializer {
    static showUserDetails(user) {
        const allowedAttributes = 
            [
            "id",
            "firstName",
            "lastName",
            "email",
            "userName",
            "address",
            "city",
            "state",
            "zip",
            "country",
            "phoneNumber",
            "bio",
            "skills",
            "imageUrl",
            "resumeFile",
            "recentGig1",
            "recentGig2",
            "recentGig3",
            ];
                let serializedUser = {}
                for (const attribute of allowedAttributes) {
                    serializedUser[attribute] = user[attribute]
                }
                return serializedUser
    }
}

export default UserSerializer;
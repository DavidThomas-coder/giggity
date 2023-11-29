import "./UserProfile.styles.scss"

import React, {useEffect, useState} from "react"

const UserProfile = ({ user }) => {

    const [postedGigs, setPostedGigs] = useState(null)

    const getPostedGigs = async () => {
        try {
            const response = await fetch(`/api/v1/gigs/${id}`)
            if(!response.ok) {
                throw new Error(`${response.status} (${response.statusText})`)
            }
            
        } catch (error) {
            
        }
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.firstName}</p>
        </div>
    )
}

export default UserProfile
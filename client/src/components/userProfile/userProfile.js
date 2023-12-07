import "./UserProfile.styles.scss"

import React, {useEffect, useState} from "react"

const UserProfile = ({ user }) => {

    const [postedGigs, setPostedGigs] = useState(null)

    const getPostedGigs = async (userId) => {
        console.log('getPostedGigs')
        try {
            const response = await fetch(`/api/v1/users/${userId}/gigs`)
            if(!response.ok) {
                throw new Error(`${response.status} (${response.statusText})`)
            }
            const body = await response.json()
            setPostedGigs(body)
        } catch (error) {
            console.error(`Error in fetch; ${error.message}`)
        }
    }

    useEffect(() => {
        getPostedGigs()
    },[])

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.firstName}</p>
        </div>
    )
}

export default UserProfile
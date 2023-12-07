import "./UserProfile.styles.scss"
import { useParams } from "react-router-dom"
import React, {useEffect, useState} from "react"

const UserProfile = ({ user }) => {

    const [postedGigs, setPostedGigs] = useState(null)
    
    console.log('user', user)

    const getPostedGigs = async () => {
        console.log('getPostedGigs word word word')
        try {
            const response = await fetch(`/api/v1/users/${user.id}/gigs`)
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
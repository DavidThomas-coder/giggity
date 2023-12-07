import "./UserProfile.styles.scss"
import React, {useEffect, useState} from "react"

const UserProfile = ({ user }) => {
    
    const [postedGigs, setPostedGigs] = useState([])
    const id = user.id

    const getPostedGigs = async () => {
        console.log('getPostedGigs word word word')
        try {
            const response = await fetch(`/api/v1/users/${user.id}/gigs`)
            if(!response.ok) {
                throw new Error(`${response.status} (${response.statusText})`)
            }
            const body = await response.json()
            console.log("Here's the body from the backend:", body)
            setPostedGigs(body)
            console.log( 'here be body', body)
        } catch (error) {
            console.error(`Error in fetch; ${error.message}`)
        }
    }
    console.log('hello Im gig:', postedGigs)

    const gigMap =
    Array.isArray(postedGigs) &&
    postedGigs.map(postedGigs => {
        return (
            <UserGigTile key={postedGigs.id} gig={postedGigs} />
            )
        })

        useEffect(() => {
            getPostedGigs()
        },[])

    return (
        <div>
            <div>
            <h1>User Profile</h1>
            <p>Name: {user.firstName}</p>
            </div>
            <div>
            {gigMap}
            </div>
        </div>
    )
}

export default UserProfile
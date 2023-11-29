import "./UserProfile.styles.scss"

import React, {useEffect, useState} from "react"

const UserProfile = ({ user }) => {

    const getPostedGigs = async () => {
        
    }

    return (
        <div>
            <h1>User Profile</h1>
            <p>Name: {user.firstName}</p>
        </div>
    )
}

export default UserProfile
import React, { useState, useEffect } from "react"
import { Redirect } from "react-router-dom"
import Button from '@mui/material/Button'
import { TextField } from "@mui/material"

const GigForm = ({ updateGigsList }) => {
    const [newGig, setNewGig] = useState({
        gigName: '',
        description: '',
        location:'',
        datePosted: '',
        gigExpirationDate: '',
        duration: '',
        compensation: '',
        gigCategory: '',
    })

    const [gigId, setGigId] = useState(null)
    const [shouldRedirect, setShouldRedirect] = useState(false)

    const postGig = async (newGigData) => {
        try {
            console.log('NewGig before Post:', newGig)

            const response = await fetch('/api/v1/gigs', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify(newGigData)
            })

            if (response.ok) {
                const body = await response.json()
                const { id } = body.gig
                setGigId(id)
                updateGigsList()
                setShouldRedirect(true)
            } else {
                console.log('failed to add Gig:', response.statusText)
            }
        } catch (error) {
            console.log('error in post:', error.message)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postGig(newGig)
        setNewGig({
            gigName: '',
            description: '',
            location:'',
            datePosted: '',
            gigExpirationDate: '',
            duration: '',
            compensation: '',
            gigCategory: ''
        })
    }

    const handleGigChange = (event, fieldName) => {
        setNewGig({
            ...newGig,
            [fieldName]: event.target.value,
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
            <TextField
                        label="Name"
                        value={newGig.gigName}
                        onChange={(e) => handleGigChange(e, 'gigName')}
                    />
                <TextField
                            label="Description"
                            value={newGig.description}
                            onChange={(e) => handleGigChange(e, 'description')}
                        />
                <TextField
                            label="location"
                            value={newGig.location}
                            onChange={(e) => handleGigChange(e, 'location')}
                        />
                <TextField
                            label="Date Posted"
                            value={newGig.datePosted}
                            onChange={(e) => handleGigChange(e, 'datePosted')}
                        />
                <TextField
                            label="Gig Expiration Date"
                            value={newGig.gigExpirationDate}
                            onChange={(e) => handleGigChange(e, 'gigExpirationDate')}
                        />
                <TextField
                            label="Duration"
                            value={newGig.duration}
                            onChange={(e) => handleGigChange(e, 'duration')}
                        />
                <TextField
                            label="Compensation"
                            value={newGig.compensation}
                            onChange={(e) => handleGigChange(e, 'compensation')}
                        />
                <TextField
                            label="Gig Category"
                            value={newGig.gigCategory}
                            onChange={(e) => handleGigChange(e, 'gigCategory')}
                        />
                <Button variant="contained" type="submit">Submit Gig</Button>
            </form>
        </div>
    )
}

export default GigForm
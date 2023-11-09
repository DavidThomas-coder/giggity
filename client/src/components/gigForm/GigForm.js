import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button'
import { TextField } from "@mui/material"

const GigForm = () => {
    
    const [newGig, setNewGig] = useState({
        gigName: '',
        description: '',
        location:'',
        datePosted: '',
        gigExpiration: '',
        duration: '',
        compensation: '',
        gigCategory: '',
    })

    const fetchGigs = async () => {
        try {
            const response = await fetch('api/v1/gigs')
            if (response.ok) {
                const data = await response.json()
                setGigs(data.gigs)
            } else {
                console.error('Failed to fetch gigs:', response.statusText)
            }
        } catch (error) {
            
        }
    }


    const postGig = async () => {
        try {
            console.log('NewGig:', newGig)

            const response = await fetch('/api/v1/gigs', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                },
                body: JSON.stringify({gigName: newGig.gigName})
            })

            if (response.ok) {
                const body = await response.json()
                const { id } = body.gig
                setGigId(id)
                setRedirect(true)
            } else {
                console.log('failed to add Gig:', response.statusText)
            }

        } catch (error) {
            console.log('error in post:', error.message)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        postGig()
    }

    const handleGigChange = (event) => {
        setNewGig({
            ...newGig,
            [event.currentTarget.name]: event.currentTarget.value
        })
    }

    useEffect(() => {
        fetchGigs();
    }, []);

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <TextField label="Name:">
                    Name:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </TextField>
                <label>
                    Description:
                        <input
                            type="text"
                            name="description"
                            value={newGig.description}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Location:
                        <input
                            type="text"
                            name="location"
                            value={newGig.location}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Today's Date:
                        <input
                            type="text"
                            name="datePosted"
                            value={newGig.datePosted}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Expiration Date:
                        <input
                            type="text"
                            name="gigExpirationDate"
                            value={newGig.gigExpirationDate}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Duration:
                        <input
                            type="text"
                            name="duration"
                            value={newGig.duration}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Compensation:
                        <input
                            type="text"
                            name="compensation"
                            value={newGig.compensation}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Category:
                        <input
                            type="text"
                            name="gigCategory"
                            value={newGig.gigCategory}
                            onChange={handleGigChange}
                        />
                </label>
                <Button variant="contained" type="submit">Submit Gig</Button>
            </form>
        </div>
    )
}

export default GigForm
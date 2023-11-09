import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button'
import { TextField } from "@mui/material"

const GigForm = () => {
    
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
    const [gigs, setGigs] = useState([])
    const [gigId, setGigId] = useState(null)

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
            console.error('Error fetching gigs:', error)
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

    const handleGigChange = (event, fieldName) => {
        setNewGig({
            ...newGig,
            [fieldName]: event.target.value,
        })
    }

    useEffect(() => {
        fetchGigs();
    }, []);

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
                            onChange={(e) => handleGigChange(e, 'Location')}
                        />
                <TextField
                            label="Date Posted"
                            value={newGig.datePosted}
                            onChange={(e) => handleGigChange(e, 'datePosted')}
                        />
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
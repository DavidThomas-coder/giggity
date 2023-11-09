import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button'

const GigForm = () => {

    const handleSubmit = () => {

    }

    const handleGigChange = () => {

    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
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
import React, { useState, useEffect } from "react"
import Button from '@mui/material/Button'

const GigForm = () => {
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
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Post A Gig Here:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Post A Gig Here:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Post A Gig Here:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Post A Gig Here:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Post A Gig Here:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <Button variant="contained" type="submit">Submit Gig</Button>
            </form>
        </div>
    )
}
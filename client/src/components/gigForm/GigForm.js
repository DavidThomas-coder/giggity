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
                    Location:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Today's Date:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Expiration Date:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Duration:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Compensation:
                        <input
                            type="text"
                            name="gigName"
                            value={newGig.gigName}
                            onChange={handleGigChange}
                        />
                </label>
                <label>
                    Category:
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
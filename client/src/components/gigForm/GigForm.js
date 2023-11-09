import React, { useState, useEffect } from "react"

const GigForm = () => {
    return (
        <div>
            <form onSubmit={handleSubmit}>
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
            </form>
        </div>
    )
}
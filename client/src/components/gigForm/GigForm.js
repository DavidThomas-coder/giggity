import React, { useState, useEffect } from "react"

const GigForm = () => {
    return (
        <div>
            <form>
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
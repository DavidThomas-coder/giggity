import './gigShowPage.styles.scss';
import React, { useState, useEffect } from "react";

const GigShowPage = () => {
    const [gigShow, setGigShow] = useState({
        id: "",
        gigName: "",
        description: "",
        location: "",
        datePosted: "",
        gigExpirationDate: "",
        duration: "",
        compensation: "",
        ownerId: ""
    });

    const getGig = async () => {
        const gigId = window.location.pathname.split('/').pop(); // Extract gigId from the URL
        try {
            const response = await fetch(`/api/v1/gigs/${gigId}`);
            if (!response.ok) {
                const errorMessage = `${response.status} (${response.statusText})`;
                const error = new Error(errorMessage);
                throw error;
            }
            const body = await response.json();
            console.log("Body:", body);
            setGigShow(body.gig);
        } catch (err) {
            console.error(`Error in fetch: ${err.message}`);
        }
    };

    useEffect(() => {
        getGig();
    }, []); // No dependencies, fetch only once on component mount

    return (
        <div>
            <h1>GIG SHOW</h1>
            <h1>{gigShow.gigName}</h1>
            <p>{gigShow.description}</p>
        </div>
    );
}

export default GigShowPage;

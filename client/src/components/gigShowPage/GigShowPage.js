import './gigShowPage.styles.scss';
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';

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
    
    const { id } = useParams()

    const getGig = async () => {
        try {
            const response = await fetch(`/api/v1/gigs/${id}`);
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

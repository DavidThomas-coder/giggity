import './gigShowPage.styles.scss'
import React, { useState, useEffect } from "react";
// import GigForm from '../gigForm/GigForm';

const GigShowPage = (props) => {
    const [gigShow, setGigShow] = useState({
        id: ""
    })

    const getGig = async () => {
        const gigId = props.match.params.id;
        try {
        const response = await fetch(`/api/v1/gigs/${gigId}`);
        if (!response.ok) {
            const errorMessage = `${response.status} (${response.statusText})`;
            const error = new Error(errorMessage);
            throw error;
        }
        const body = await response.json();
        setGigShow(body.gig);
        } catch (err) {
        console.error(`Error in fetch: ${err.message}`);
        }
    };

    return (
        <div>
            <h1>GIG SHOW</h1>
            <h1>{gigShow.gigName}</h1>
            <p>{gigShow.description}</p>
        </div>
    )
}

export default GigShowPage
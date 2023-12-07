import React from "react";

const UserGigTile = ({ gig }) => {
    console.log('props for usergigtile', gig)

    return (
        <div>
            <p>Hello</p>
            <p>{gig.gig.gigName}</p>
            <p>{gig.gig.description}</p>
        </div>
    )
}

export default UserGigTile;
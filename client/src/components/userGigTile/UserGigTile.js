import React from "react";

const UserGigTile = (props) => {
    console.log('props for usergigtile', props)

    return (
        <div>
             <p>Hello</p>
            <p>{props.gigName}</p>
            <p>{props.description}</p>
        </div>
    )
}

export default UserGigTile;
import React from "react";

const GigTile = (props) => {

    

    console.log("These are props:", props)

    return (
        <div>
            {props.gigs.gigName}
        </div>
    )
}

export default GigTile
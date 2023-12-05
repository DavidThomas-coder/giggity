import React from "react";

const GigTile = (props) => {

    

    console.log("These are props:", props)

    return (
        <div>
            {props.gigs.gigs && (
                <div>
                    {props.gigs.gigs.gigName}
                </div>
            )}
        </div>
    )
}

export default GigTile
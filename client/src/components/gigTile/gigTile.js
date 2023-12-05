import React from "react";

const GigTile = (props) => {

    

    console.log("These are props:", props)

    return (
        <div>
            {props.gig && (
                <div>
                    {props.gig.gigName}
                </div>
            )}
        </div>
    )
}

export default GigTile
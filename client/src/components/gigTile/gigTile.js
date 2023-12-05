import React from "react";

const GigTile = (props) => {


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
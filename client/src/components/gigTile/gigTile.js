import React from "react";

const GigTile = (props) => {

console.log('I am props from user: ', props)
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
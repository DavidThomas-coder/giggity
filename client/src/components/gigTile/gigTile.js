import React from "react";
import { Link } from "react-router-dom";

const GigTile = ({ gig }) => {
  console.log('I am gig from GigTile: ', gig);

  return (
    <div>
      {gig && (
        <div>
          <Link to={`/gigsPage/${gig.id}`}>{gig.gigName}</Link>
        </div>
      )}
    </div>
  );
}

export default GigTile;

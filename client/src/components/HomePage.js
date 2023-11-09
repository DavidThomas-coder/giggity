import React from 'react';
import GigForm from './gigForm/GigForm.js';


const HomePage = (props) => {
    return (
      <div>
        <h1>Hello from the homepage</h1>
        <div>
          <GigForm />
        </div>
      </div>
    );
}

export default HomePage;
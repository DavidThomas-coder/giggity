import React from 'react';
import Button from '@mui/material/Button';
import GigForm from './gigForm/GigForm.js';


const HomePage = (props) => {
    return (
      <div>
        <h1>Hello from the homepage</h1>
        <div>
          <Button variant="contained">Hello World</Button>
        </div>
        <div>
          <GigForm />
        </div>
      </div>
    );
}

export default HomePage;
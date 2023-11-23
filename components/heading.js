import { Box } from '@chakra-ui/react'
import React from 'react';

const headerStyle = {
    backgroundColor: '#5e7693',
    color: '#fff',
    textAlign: 'center',
    padding: '40px 20px',
  };

const Heading = () => {
    return ( 
        <header style={headerStyle}>
            <h1>Jan Earol Rasco</h1>
            <p>22 Years Old</p>
            <p>Valenzuela City</p>
            <p></p>
        </header>
            
        
     );
     
}
 
export default Heading;
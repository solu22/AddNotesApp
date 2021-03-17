import React from 'react';

const Footer= ()=>{
    const date= new Date();
    const year= date.getFullYear();
    return (
        <footer>
          <p>&copy;{year} Notes App</p>
        </footer>
    )
};

export default Footer;
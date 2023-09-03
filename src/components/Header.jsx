 import React from 'react';
 import Button from './Button';


 const Header = (props) => {
    return (
        <header className='header'>
            <h1>{props.title}</h1>
            <Button text="Hello" color="black"/>

        </header>
        
    )
 }

 export default Header;
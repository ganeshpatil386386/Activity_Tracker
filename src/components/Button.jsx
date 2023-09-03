import React from 'react';

 const Button = ({text, color}) => {
    
    const printData = (e) => {
        console.log(e)
    }

    
    return (
        <div>
        <button
            onClick={printData} 
            className='btn'  
            style={{backgroundColor:color}}>
                {text}
        </button>

        </div>
        
    )
 }

 export default Button
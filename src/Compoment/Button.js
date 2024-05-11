import React from 'react';
import './Button.css'; 

function Button({ btnType, onClick, children }) {

    return (
        <button className={`button ${btnType}`} onClick={onClick}>
            {children} 
        </button>    
    );
}

export default Button;
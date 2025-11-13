import React from 'react';
import './OXbtn.css'

function OXbtn({ label, value, onChange }){
    const handleClick = (selectedValue) => {
        if (onChange) {
            onChange(selectedValue);
        }
    };

    return(
        <div>
            <label>{label}</label>
            <button 
                onClick={() => handleClick(true)}
                style={{ 
                    backgroundColor: value === true ? '#141414' : '#f9f9f9',
                    color: value === true ? 'white' : '#333'
                }}
            >
                O
            </button>
            <button 
                onClick={() => handleClick(false)}
                style={{ 
                    backgroundColor: value === false ? '#141414' : '#f9f9f9',
                    color: value === false ? 'white' : '#333'
                }}
            >
                X
            </button>
        </div>
    )
}

export default OXbtn;
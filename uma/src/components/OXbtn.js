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
                className={value === true ? 'selected' : ''}
            >
                O
            </button>
            <button 
                onClick={() => handleClick(false)}
                className={value === false ? 'selected' : ''}
            >
                X
            </button>
        </div>
    )
}

export default OXbtn;
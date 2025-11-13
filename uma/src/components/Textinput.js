import React from 'react';
import './Textinput.css';


function Textinput({ label, value, onChange }){
    return(
        <div>
            <label>{label}</label>
            <input 
                type='number' 
                value={value || ''} 
                onChange={(e) => onChange && onChange(e.target.value)}
            ></input>
        </div>
    )
}

export default Textinput;
import React from 'react';
import './Textinput.css';


function Textinput({ label }){
    return(
        <div>
            <label>{label}</label>
            <input type='number'></input>
        </div>
    )
}

export default Textinput;
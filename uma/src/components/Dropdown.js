import React from 'react';
import './Dropdown.css'

function Dropdown({ label }){
    return(
        <div>
            <label>{label}</label>
            <select>
                <option></option>
            </select>
        </div>
    )
}

export default Dropdown;
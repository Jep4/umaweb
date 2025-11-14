import React from 'react';
import './Dropdown.css'

function Dropdown({ label, value, onChange, options = [] }){
    const firstOptionValue = options.length > 0 ? (options[0].value || options[0]) : '';
    const currentValue = value || firstOptionValue;

    return(
        <div>
            <label>{label}</label>
            <select value={currentValue} onChange={(e) => onChange && onChange(e.target.value)}>
                {options.map((option, index) => (
                    <option key={index} value={option.value || option}>
                        {option.label || option}
                    </option>
                ))}
            </select>
        </div>
    )
}

export default Dropdown;
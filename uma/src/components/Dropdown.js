import React from 'react';
import './Dropdown.css'

function Dropdown({ label, value, onChange, options = [] }){
    return(
        <div>
            <label>{label}</label>
            <select value={value || ''} onChange={(e) => onChange && onChange(e.target.value)}>
                <option value="">선택하세요</option>
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
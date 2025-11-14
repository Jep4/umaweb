import React from 'react';
import './Textinput.css';


function Textinput({ label, value, onChange, placeholder }){
    const handleClear = () => {
        if (onChange) {
            onChange('');
        }
    };

    const formatDate = (inputValue) => {
        const numbers = inputValue.replace(/\D/g, '');
        
        if (numbers.length === 0) return '';
        if (numbers.length <= 4) return numbers;
        if (numbers.length <= 6) return `${numbers.slice(0, 4)}/${numbers.slice(4)}`;
        return `${numbers.slice(0, 4)}/${numbers.slice(4, 6)}/${numbers.slice(6, 8)}`;
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        if (placeholder === 'YYYY/MM/DD') {
            const formatted = formatDate(inputValue);
            if (onChange) {
                onChange(formatted);
            }
        } else {
            if (onChange) {
                onChange(inputValue);
            }
        }
    };

    return(
        <div>
            <label>{label}</label>
            <div className="input-wrapper">
                <input 
                    type={placeholder ? 'text' : 'number'} 
                    value={value || ''} 
                    onChange={handleChange}
                    placeholder={placeholder}
                    maxLength={placeholder === 'YYYY/MM/DD' ? 10 : undefined}
                />
                {value && (
                    <button 
                        type="button"
                        className="clear-btn"
                        onClick={handleClear}
                        aria-label="Clear input"
                    >
                        ×
                    </button>
                )}
            </div>
        </div>
    )
}

export default Textinput;
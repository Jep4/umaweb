import React from 'react';
import './OXbtn.css'

function OXbtn({ label }){
    return(
        <div>
            <label>{label}</label>
            <button>O</button>
            <button>X</button>
        </div>
    )
}

export default OXbtn;
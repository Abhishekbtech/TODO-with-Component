import React from 'react';
import './Checked.css'; 


function Checked({ label}) {
    return (
        <label className="checkbox">
            <input type="radio" style={{marginRight: 10}} />
            <span className="label">{label}</span>
        </label>
    );
}

export default Checked;
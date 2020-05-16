import React from 'react';
import './alert.css';

export default ({ message, icon }) => {
    return (
        <div className="country-not-found-card">
            <span>{message}</span>
            <img src={icon} width={40} height={40} />
        </div>
    )
};
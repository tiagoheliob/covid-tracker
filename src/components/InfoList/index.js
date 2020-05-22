import React from 'react';
import { mappedFieldsToRender, formatNumber } from './constant';
import './infoList.css';

export default ({ country }) => {

    if(!country) {
        return <div>Loading...</div>
    }
    
    const list = mappedFieldsToRender.map(({ field, label }) => {
        return <li key={field} className="info-list-container-item">{label}: {formatNumber(country[field])}</li>
    });

    return (
        <ul className="info-list-container">
            {list}
        </ul>
    );
};
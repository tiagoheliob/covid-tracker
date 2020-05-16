import React, { useState } from 'react';
import './searchInput.css';

export default () => {
    const [ inputValue, setInputValue ] = useState("");
    const handleChange = event => setInputValue(event.target.value)

    return (
        <input 
            placeholder="Search the country" 
            className="search-input"
            value={inputValue}
            onChange={handleChange}
        />
    );
}
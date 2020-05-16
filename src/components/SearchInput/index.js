import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchByCountry, searchWithoutCountry } from '../../redux/actions/countrySearch';
import './searchInput.css';
import SearchIcon from '../../../assets/icons/search.svg';

export const SearchInput =  ({ searchByCountry, searchWithoutCountry, isLoading }) => {
    const [ inputValue, setInputValue ] = useState("");
    const handleChange = event => setInputValue(event.target.value)
    
    const onSearchButton = () => {
        
        if(!inputValue) {
            searchWithoutCountry();
        }

        searchByCountry(inputValue);
    }

    const onKeyPress = ({ key }) => {
        if (key === 'Enter')  {
            onSearchButton();
        }
    }

    return (
        <>
            <input
                placeholder="Search the country" 
                className="search-input"
                value={isLoading ? 'Loading...' : inputValue}
                onChange={handleChange}
                disabled={isLoading}
                onKeyPress={onKeyPress}
            />
            <button className="search-button" onClick={onSearchButton} disabled={isLoading}>
                <img
                    src={SearchIcon}
                    width={40}
                    height={40}
                />
            </button>
        </>
    );
};

const mapDispatchToProps = ({ countrySearch: { isLoading } }) => ({ isLoading });
export default connect(mapDispatchToProps, { searchByCountry, searchWithoutCountry })(SearchInput);
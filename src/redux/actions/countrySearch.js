import axios from 'axios';

export const CountrySearch = {
    ERROR : 'COUNTRY_SEARCH_ERROR',
    SUCCESS: 'COUNTRY_SEARCH_SUCCESS',
    CLEANUP: 'COUNTRY_SEARCH_CLEANUP',
    LOADING: 'COUNTRY_SEARCH_LOADING',
}

export const baseURL = "https://coronavirus-19-api.herokuapp.com";

export const searchByCountry = (countryName) => async (dispatch) => {
    await genericSearch(countryName)(dispatch);
}

export const searchWithoutCountry = () => async (dispatch) => {
    await genericSearch()(dispatch);
}

export const genericSearch = (countryName) => async (dispatch) => {

    dispatch({ type: CountrySearch.LOADING });
    
    try {
        const path = countryName ? `countries/${countryName}` : `countries`
        const { data } = await axios.get(`${baseURL}/${path}`);
        dispatch({ type: CountrySearch.SUCCESS, payload: data });
    } catch (exception) {
        dispatch({ type: CountrySearch.ERROR });
    }
    
}
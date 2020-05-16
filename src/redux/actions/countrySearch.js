import axios from 'axios';

export const CountrySearch = {
    ERROR : 'ERROR',
    SUCCESS: 'SUCCESS',
    CLEANUP: 'CLEANUP',
    LOADING: 'LOADING',
}

const axiosInstance = axios.create({ baseURL: "https://coronavirus-19-api.herokuapp.com/" });

export const searchByCountry = (countryName) => async (dispatch) => {
    genericSearch(countryName, dispatch);
}

export const searchWithoutCountry = () => async (dispatch) => {
    genericSearch(null, dispatch);
}

const genericSearch = async (countryName, dispatch) =>{

    dispatch({ type: CountrySearch.LOADING });
    
    try {
        const url = countryName ? `countries/${countryName}` : `countries`;
        const { data } = await axiosInstance.get(url);
        dispatch({ type: CountrySearch.SUCCESS, payload: data });
    } catch (exception) {
        dispatch({ type: CountrySearch.ERROR });
    }
}
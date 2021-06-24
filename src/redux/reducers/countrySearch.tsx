import { CountrySearch } from '../actions/countrySearch';

export const defaultState = {
    countries: [],
    isLoading: false,
    error: false,
}
export default ( state = defaultState, action ) => {

    switch(action.type) {
        case CountrySearch.ERROR:
            return { ...state, isLoading: false, error: true }
        case CountrySearch.SUCCESS:
            return { ...state, isLoading: false, error: false, countries: action.payload }
        case CountrySearch.LOADING:
            return { ...state, isLoading: true };
        case CountrySearch.CLEANUP:
            return defaultState;
        default:
            return {...state};
    }
}
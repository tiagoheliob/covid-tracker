import { CountryPolygon } from '../actions/countryPolygon';

export const defaultState = {
    countryInfo: null,
    isLoading: false,
    error: false,
}
export default ( state = defaultState, action ) => {
    switch(action.type) {
        case CountryPolygon.ERROR:
            return { ...state, isLoading: false, error: true }
        case CountryPolygon.SUCCESS:
            return { ...state, isLoading: false, error: false, countryInfo: action.payload }
        case CountryPolygon.LOADING:
            return { ...state, isLoading: true };
        default:
            return state;
    }
}
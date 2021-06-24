import { combineReducers } from 'redux';
import countrySearch from './reducers/countrySearch';
import countryPolygon from './reducers/countryPolygon';

export default combineReducers({
    countrySearch,
    countryPolygon,
})
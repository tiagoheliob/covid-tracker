import axios from 'axios';

const countryIndex = 0;

export const CountryPolygon = {
    ERROR : 'COUNTRY_POLYGON_ERROR',
    SUCCESS: 'COUNTRY_POLYGON_SUCCESS',
    LOADING: 'COUNTRY_POLYGON_LOADING',
};

export const getUrl = countryName => `https://nominatim.openstreetmap.org/search.php?q=${countryName}&polygon_geojson=1&format=json`; 

export const fetchCountryPolygons = (countryName) => async (dispatch) => {
    dispatch({ type: CountryPolygon.LOADING });

    try {
        const { data } = await axios.get(getUrl(countryName));
        dispatch({ type: CountryPolygon.SUCCESS, payload: data[countryIndex] });
    } catch ( error ) {
        dispatch({ type: CountryPolygon.ERROR });
    }
}
import axios from "axios";

export const CountrySearch = {
  ERROR: "COUNTRY_SEARCH_ERROR",
  SUCCESS: "COUNTRY_SEARCH_SUCCESS",
  CLEANUP: "COUNTRY_SEARCH_CLEANUP",
  LOADING: "COUNTRY_SEARCH_LOADING",
};

export const baseURL = "https://coronavirus-19-api.herokuapp.com";

export const fetchCountries = (countryName?: string) => async (dispatch) => {
  dispatch({ type: CountrySearch.LOADING });

  try {
    const path = countryName ? `countries/${countryName}` : `countries`;
    const { data } = await axios.get(`${baseURL}/${path}`);
    dispatch({ type: CountrySearch.SUCCESS, payload: data });
  } catch (exception) {
    dispatch({ type: CountrySearch.ERROR });
  }
};

export const mapDetailedInformationPage = ({
  countrySearch,
  countryPolygon,
}) => {
  const {
    countryInfo: { lat, lon, geojson },
  } = countryPolygon;
  const { countries } = countrySearch;
  return {
    isLoadingMap: countryPolygon.isLoading,
    isLoadingCountryData: countrySearch.isLoading,
    countries: Array.isArray(countries) ? null : countries,
    countryPolygon: {
      lat,
      lon,
      geojson,
    },
  };
};

export const countriesListSelector = ({ countrySearch }) =>
  countrySearch.countries;

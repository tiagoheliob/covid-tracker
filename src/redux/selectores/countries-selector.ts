export const mapDetailedInformationPage = ({
  countryPolygon,
}) => {
  const {
    countryInfo: { lat, lon, geojson, isLoading },
  } = countryPolygon;
  return {
    isLoading,
    countryPolygon: {
      lat,
      lon,
      geojson,
    },
  };
};

export const countriesListSelector = ({ countrySearch : { countries, isLoading } }) => ({
  countries, isLoading
})

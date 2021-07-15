export const countryPolygonSelector = ({
  countryPolygon,
}) => {
  const {
    isLoading,
    countryInfo: { lat, lon, geojson },
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

export const countriesListSelector = ({ countrySearch : { countries, isLoading } }) => {
  if (countries.length) {
    countries.sort((countryA, countryBe) => countryBe.cases - countryA.cases )
  }

  return {
    countries,
    isLoading
  }
}

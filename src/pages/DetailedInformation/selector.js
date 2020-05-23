export const mapDetailedInformationPage = ({ countrySearch, countryPolygon }) => {
    const { countryInfo: { lat, lon, geojson }} = countryPolygon;
    const { countries } = countrySearch;
    return {
        isLoadingMap: countryPolygon.isLoading,
        isLoadingChart: countries.isLoading,
        countrySearch: Array.isArray(countries) ? null : countries,
        countryPolygon: { 
            lat, 
            lon, 
            geojson
        },
    }
};
export const mapDetailedInformationPage = ({ countrySearch, countryPolygon }) => {
    return {
        countrySearch: { ...countrySearch }, 
        countryPolygon: { ...countryPolygon },
    }
}
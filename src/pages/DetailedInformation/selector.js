export const mapDetailedInformationPage = ({ countrySearch, countryPolygon }) => {
    return {
        countrySearch, 
        countryPolygon: { ...countryPolygon },
    }
}
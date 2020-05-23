const countryToBeRemoved = 'world';

export default ({ countrySearch: { countries, error } }) => {
    return { 
        countries: countries.filter( ({ country }) => country.toLowerCase() !== countryToBeRemoved ),
        error 
    }
}
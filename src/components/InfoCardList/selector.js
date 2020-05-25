const countryToBeRemoved = 'world';

export default ({ countrySearch: { countries, error } }) => {
    return { 
        countries: Array.isArray(countries) ? countries.filter( ({ country }) => country.toLowerCase() !== countryToBeRemoved ): countries,
        error 
    }
}
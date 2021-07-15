import { FC, useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCountries } from "../../redux/actions/countrySearch";
import { countriesListSelector } from "../../redux/selectors/countries-selector";
import Spinner from "../Common/spinner";
import { CenteredContainer } from "../CountryMap/country-map.styles";
import {
  CountriesListContainer,
  CountrySpan,
  SearchInput,
} from "./countries-list.styles";

interface CountriesListProps {
  onSelectCountry: (country: string) => void;
}

const CountriesList: FC<CountriesListProps> = ({ onSelectCountry }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dispatch = useDispatch();
  const { countries, isLoading } = useSelector(countriesListSelector);

  // Fetch the countries
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  // Function to filter the countries based on the search
  const filtersCountryList = (countries) => {
    return countries.filter(({ country }) =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Handles user input
  const onChangeSearchTem = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  // Format Numbers
  const formatNumber = (value: number) => {
    var nf = new Intl.NumberFormat();
    return nf.format(value);
  };

  // Renders countries list if there is data
  const renderCountriesList = () => {
    let mappedCountries = searchTerm
      ? filtersCountryList(countries)
      : countries;

    return mappedCountries.map(({ country, cases }) => (
      <CountrySpan onClick={() => onSelectCountry(country)} key={country}>
        <span>{country}</span>
        <span>{formatNumber(cases)}</span>
      </CountrySpan>
    ));
  };

  if (isLoading) {
    return (
      <CenteredContainer>
        <Spinner />
      </CenteredContainer>
    );
  }

  return (
    <CountriesListContainer>
      <SearchInput
        placeholder="Filter to a location"
        onChange={onChangeSearchTem}
      />
      {renderCountriesList()}
    </CountriesListContainer>
  );
};

export default CountriesList;

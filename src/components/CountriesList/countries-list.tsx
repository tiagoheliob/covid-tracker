import { FC, useState, useEffect, ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  countriesListSelector,
  mapDetailedInformationPage,
} from "../../redux/selectores/countries-selector";
import { fetchCountryPolygons } from "../../redux/actions/countryPolygon";
import CountryMap from "../../components/CountryMap";
import { fetchCountries } from "../../redux/actions/countrySearch";
import CountryDetailedInfo from "../CountryDetailedInfo/country-detailed-info";

const MainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
`;

const CountriesListContainer = styled.div`
  overflow-y: scroll;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  ${({ theme: { colors } }) => `
        background: ${colors.light};
    `}
`;

const CountriesMapContainer = styled.div`
  position: relative;
  & > .leaflet-container {
    height: 100%;
  }
`;

const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  margin-bottom: 1rem;
  border-radius: 3px;
  ${({ theme: { colors } }) => `
      border: 1px solid ${colors.lightDark};
  `}
`;

const CountrySpan = styled.span`
  display: flex;
  width: 100%;
  border-radius: 2px;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease-out;

  ${({ theme: { padding, colors } }) => `
    padding: ${padding.small};
    border-bottom: 1px solid ${colors.lightDark};

    &:hover {
      background: ${colors.lightDark};
    }
  `}
`;

const CountriesList: FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const dispatch = useDispatch();
  const countrySelector = useSelector(mapDetailedInformationPage);
  const { countries } = useSelector(countriesListSelector);

  const { countryPolygon, isLoading } = countrySelector;
  const countryMapProps = {
    ...countryPolygon,
    zoom: 5,
    isLoading,
  };

  // Fetch the countries
  useEffect(() => {
    dispatch(fetchCountries());
  }, []);

  // When the user selects a country fetch country location/geojson
  useEffect(() => {
    if (selectedCountry) {
      dispatch(fetchCountryPolygons(selectedCountry));
    }
  }, [selectedCountry]);

  // Handles user input
  const onChangeSearchTem = (event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);
  };

  const filtersCountryList = (countries) => {
    return countries.filter(({ country }) =>
      country.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Renders a list of countries
  const renderCountriesList = () => {
    if (!countries) {
      return null;
    }

    let mappedCountries = searchTerm
      ? filtersCountryList(countries)
      : countries;

    return mappedCountries.map(({ country, cases }) => (
      <CountrySpan onClick={() => setSelectedCountry(country)} key={country}>
        <span>{country}</span>
        <span>{cases}</span>
      </CountrySpan>
    ));
  };
  return (
    <MainInfoContainer>
      <CountriesListContainer>
        <SearchInput
          placeholder="Filter to a location"
          onChange={onChangeSearchTem}
        />
        {renderCountriesList()}
      </CountriesListContainer>
      <CountriesMapContainer>
        <CountryDetailedInfo selectedCountry={selectedCountry} />
        {selectedCountry && <CountryMap {...countryMapProps} />}
      </CountriesMapContainer>
    </MainInfoContainer>
  );
};

export default CountriesList;

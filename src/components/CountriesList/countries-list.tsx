import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import {
  countriesListSelector,
  mapDetailedInformationPage,
} from "../../pages/DetailedInformation/selector";
import { fetchCountryPolygons } from "../../redux/actions/countryPolygon";
import CountryMap from "../../components/CountryMap";
import { genericSearch } from "../../redux/actions/countrySearch";

const MainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
`;

const CountriesListContainer = styled.div`
  overflow-y: scroll;
  ${({ theme: { colors, padding } }) => `
        display: flex;
        flex-direction: column;
        align-content: center;
        background: ${colors.light};
        padding-top: ${padding.medium}
    `}
`;

const Country = styled.span`
  display: flex;
  width: 100%;
  border-radius: 2px;
  font-weight: 0.8rem;
  font-weight: bold;
  justify-content: space-between;
  cursor: pointer;
  ${({ theme: { padding, colors } }) => `
    padding: ${padding.small};
    border-bottom: 1px solid ${colors.lightDark}
  `}
`;

const CountryMapContainer = styled.div`
  height: 100%;
`;

const CountriesList: FC = () => {
  const dispatch = useDispatch();
  const countrySelector = useSelector(mapDetailedInformationPage);
  const countriesList = useSelector(countriesListSelector);

  const { countryPolygon, isLoadingMap } = countrySelector;
  const countryMapProps = {
    ...countryPolygon,
    zoom: 4,
    isLoading: isLoadingMap,
  };

  useEffect(() => {
    dispatch(fetchCountryPolygons("Brazil"));
    dispatch(genericSearch());
  }, []);

  const renderCountriesList = () => {
    console.clear();
    if (!countriesList) {
      return null;
    }

    return countriesList.map(({ country, cases }) => (
      <Country>
        <span>{country}</span>
        <span>{cases}</span>
      </Country>
    ));
  };
  return (
    <MainInfoContainer>
      <CountriesListContainer>{renderCountriesList()}</CountriesListContainer>
      <CountryMap {...countryMapProps} />
    </MainInfoContainer>
  );
};

export default CountriesList;

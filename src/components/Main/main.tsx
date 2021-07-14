import { FC, useState } from "react";
import styled from "styled-components";
import CountryMap from "../CountryMap/country-map";
import CountriesList from "../CountriesList/countries-list";

const MainInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  height: 100%;
`;

const Main: FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  return (
    <MainInfoContainer>
      <CountriesList
        onSelectCountry={(country) => setSelectedCountry(country)}
      />
      <CountryMap selectedCountry={selectedCountry} />
    </MainInfoContainer>
  );
};

export default Main;

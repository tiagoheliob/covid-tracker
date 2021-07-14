import { FC, useState } from "react";
import { MainInfoContainer } from "./main.style";
import CountryMap from "../CountryMap/country-map";
import CountriesList from "../CountriesList/countries-list";

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

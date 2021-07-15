import { FC, useState } from "react";
import { MainInfoContainer } from "./main.style";
import CountryMap from "../CountryMap/country-map";
import CountriesList from "../CountriesList/countries-list";
import { useDispatch } from "react-redux";
import { cleanPolygon } from "../../redux/actions/countryPolygon";

const Main: FC = () => {
  const dispatch = useDispatch();
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);

  // In case it's "world" re-set polygon
  // otherwise set the country to be fetch the polygon
  const onSelectFilter = (country: string) => {
    if (country.toLowerCase() === "world") {
      setSelectedCountry(null);
      dispatch(cleanPolygon());
      return;
    }

    setSelectedCountry(country);
  };

  return (
    <MainInfoContainer>
      <CountriesList onSelectCountry={onSelectFilter} />
      <CountryMap selectedCountry={selectedCountry} />
    </MainInfoContainer>
  );
};

export default Main;

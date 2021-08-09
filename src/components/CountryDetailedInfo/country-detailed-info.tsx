import { FC } from "react";
import { useSelector } from "react-redux";
import { countriesListSelector } from "../../redux/selectors/countries-selector";
import { mappedFieldsToRender } from "./country-detailed-info.constant";
import {
  CountryDetailedInfoContainer,
  CountryTitle,
  CountryInfoItem,
  InfoSection,
  SectionTitle,
} from "./country-detailed.styles";
import CountryDetailedInfoCharts from "./country-detailed-info-charts/country-detailed-info-charts";

interface CountryDetailedInfoProps {
  selectedCountry?: string;
}
const CountryDetailedInfo: FC<CountryDetailedInfoProps> = ({
  selectedCountry,
}) => {
  const { countries } = useSelector(countriesListSelector);

  if (!countries.length || !selectedCountry) {
    return null;
  }

  const mappedCountry = countries.find(
    ({ country }) => country === selectedCountry
  );

  const renderInfoList = () => {
    var nf = new Intl.NumberFormat();
    return mappedFieldsToRender.map(({ field, label }) => {
      return (
        <CountryInfoItem key={field}>
          {`${label}: ${nf.format(mappedCountry[field])}`}
        </CountryInfoItem>
      );
    });
  };

  return (
    <CountryDetailedInfoContainer>
      <CountryTitle>{mappedCountry.country}</CountryTitle>
      <SectionTitle>Overview</SectionTitle>
      <InfoSection>{renderInfoList()}</InfoSection>
      <SectionTitle>Trend</SectionTitle>
      <InfoSection>
        <CountryDetailedInfoCharts countryData={mappedCountry} />
      </InfoSection>
    </CountryDetailedInfoContainer>
  );
};

export default CountryDetailedInfo;

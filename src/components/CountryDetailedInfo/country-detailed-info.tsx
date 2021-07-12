import { FC } from "react";
import styled from "styled-components";

const CountryDetailedInfoContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 999;
`;

interface CountryDetailedInfoProps {
  selectedCountry?: string;
}
const CountryDetailedInfo: FC<CountryDetailedInfoProps> = ({
  selectedCountry,
}) => {
  return (
    <CountryDetailedInfoContainer>Placeholder</CountryDetailedInfoContainer>
  );
};

export default CountryDetailedInfo;

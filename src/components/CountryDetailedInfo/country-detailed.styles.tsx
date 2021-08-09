import styled from "styled-components";

export const CountryDetailedInfoContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  z-index: 999;
  background: #fff;
  border-radius: 5px;
  padding: 1rem;
  min-width: 15rem;
  box-shadow: 0px 3px 12px rgb(0 0 0 / 15%);
  overflow-y: scroll;
  overflow-x: hidden;
  height: 31rem;
`;

export const CountryTitle = styled.h3`
  margin: 0;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const CountryInfoItem = styled.span`
  margin-bottom: 5px;
  display: block;
  &::last-child {
    margin-bottom: 0;
  }
`;

export const SectionTitle = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0;
`;
export const InfoSection = styled.div`
  ${({ theme: { colors, padding } }) => `
    border: 1px solid ${colors.lightDark};
    border-radius: 5px;
    padding: ${padding.medium};
  `}
`;

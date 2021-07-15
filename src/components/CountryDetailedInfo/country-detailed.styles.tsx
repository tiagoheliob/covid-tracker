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
`;

export const CountryTitle = styled.h3`
  margin: 0;
  font-size: 1.2rem;
  margin-bottom: 10px;
`;

export const CountryInfoItem = styled.span`
  margin-bottom: 5px;
  display: block;
  &::last-child {
    margin-bottom: 0;
  }
`;

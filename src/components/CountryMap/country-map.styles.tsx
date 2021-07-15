import styled from "styled-components";

export const CountriesMapContainer = styled.div`
  position: relative;
  & > .leaflet-container {
    height: 100%;
  }
`;

export const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ theme: { colors } }) => `
        background: ${colors.light};
  `}
`;

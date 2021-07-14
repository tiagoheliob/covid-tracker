import styled from "styled-components";

export const CountriesListContainer = styled.div`
  overflow-y: scroll;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  ${({ theme: { colors } }) => `
        background: ${colors.light};
    `}
`;

export const SearchInput = styled.input`
  padding: 0.5rem;
  border: none;
  margin-bottom: 1rem;
  border-radius: 3px;
  ${({ theme: { colors } }) => `
      border: 1px solid ${colors.lightDark};
  `}
`;

export const CountrySpan = styled.span`
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

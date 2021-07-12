import styled from "styled-components";

const Navbar = styled.div`
  display: flex;
  ${({ theme: { colors, padding } }) => `
    background: ${colors.light};
    padding: ${padding.small};
    align-items: center;
    border: 1px solid #DDD;
  `}
`;

const LogoTitle = styled.span`
  font-size: 1.5rem;
`;

export default () => {
  return (
    <Navbar>
      <LogoTitle>Covid-19 Tracker</LogoTitle>
    </Navbar>
  );
};

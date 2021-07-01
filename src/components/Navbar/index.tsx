import styled from "styled-components";
import logoUrl from "../../../assets/icons/logo.png";
import "./appBar.css";

const Navbar = styled.div`
  display: flex;
  ${({ theme: { colors, padding } }) => `
    background: ${colors.light};
    color: ${colors.primary};
    padding: ${padding.small};
    gap: 1rem;
    align-items: center;
    justify-content: center;
    border: 1px solid #DDD;
  `}
`;

const Logo = styled.img`
  height: 3.5rem;
`;

const LogoTitle = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default () => {
  return (
    <Navbar>
      <Logo src={logoUrl} />
      <LogoTitle>Covid-19 Tracker</LogoTitle>
    </Navbar>
  );
};

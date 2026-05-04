import { CTA, Logo, NavLinks, StyledLink, Wrapper } from "./styles";

function Navbar() {
  return (
    <Wrapper>
      <Logo>
        Dany <span>Personal</span>
      </Logo>

      <NavLinks>
        <li>
          <StyledLink to="/">Início</StyledLink>
        </li>
        <li>
          <StyledLink to="/sobre">Sobre</StyledLink>
        </li>
        <li>
          <StyledLink to="/planos">Serviços</StyledLink>
        </li>
        <li>
          <StyledLink to="/horarios">Horários</StyledLink>
        </li>
      </NavLinks>

      <CTA href="https://wa.me/558598677116" target="_blank" rel="noopener noreferrer">
        Agendar ✦
      </CTA>
    </Wrapper>
  );
}

export default Navbar;

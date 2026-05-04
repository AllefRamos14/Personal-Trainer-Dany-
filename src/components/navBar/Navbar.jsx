import { useMemo } from "react";
import { CTA, Logo, NavLinks, StyledLink, Wrapper } from "./styles";

function Navbar() {
  const whatsappLink = useMemo(() => {
    const message = `
        Olá! 👋

        Vi seu site e gostaria de agendar um treino personalizado.

        Qual sua disponibilidade? 💪
    `;

    return `https://wa.me/558598677116?text=${encodeURIComponent(message)}`;
  }, []);

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

      <CTA href={whatsappLink} target="_blank" rel="noopener noreferrer">
        Agendar ✦
      </CTA>
    </Wrapper>
  );
}

export default Navbar;

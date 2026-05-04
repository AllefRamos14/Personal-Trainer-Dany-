import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.footer`
  background: #1a1a1a;
  padding: 40px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;
`;

const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 20px;
  color: ${({ theme }) => theme.colors.rose};

  span {
    color: ${({ theme }) => theme.colors.gold};
    font-style: italic;
  }
`;

const Text = styled.p`
  color: rgba(255,255,255,0.5);
  font-size: 13px;
`;

const Links = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: rgba(255,255,255,0.5);
    font-size: 13px;
  }

  a:hover {
    color: ${({ theme }) => theme.colors.rose};
  }
`;

function Footer() {
  return (
    <Wrapper>
      <Logo>
        Dany <span>Personal</span>
      </Logo>

      <Text>© 2025 Dany Personal Trainer. Todos os direitos reservados.</Text>

      <Links>
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/horarios">Horários</Link>
      </Links>
    </Wrapper>
  );
}

export default Footer;

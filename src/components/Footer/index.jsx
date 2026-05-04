import { Link } from "react-router-dom";
import { Footer } from "./styles";

function FooterLinks() {
  return (
    <Footer>
      <div className="footer-logo">
        Dany <span>Personal</span>
      </div>
      <div className="footer-text">© 2025 Dany Personal Trainer. Todos os direitos reservados.</div>
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/sobre">Sobre</Link>
        <Link to="/planos">Planos</Link>
        <Link to="/horarios">Horários</Link>
      </div>
    </Footer>
  );
}
export default FooterLinks;

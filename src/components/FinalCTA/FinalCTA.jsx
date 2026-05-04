import { Actions, Description, OutlineButton, Section, Title, WhatsAppButton } from "./styles";

function FinalCTA() {
  return (
    <Section>
      <Title>
        Pronta para <em>começar</em>?
      </Title>

      <Description>Dê o primeiro passo. Agende uma avaliação gratuita agora mesmo.</Description>

      <Actions>
        <WhatsAppButton
          href="https://wa.me/5500000000000?text=Olá! Quero agendar uma avaliação."
          target="_blank"
          rel="noreferrer"
        >
          Chamar no WhatsApp
        </WhatsAppButton>

        <OutlineButton href="/planos">Ver Planos</OutlineButton>
      </Actions>
    </Section>
  );
}

export default FinalCTA;

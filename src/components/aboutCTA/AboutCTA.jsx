import { Button, Description, Section, Title } from "./styles";

function AboutCTA() {
  return (
    <Section>
      <Title>
        Pronta para <em>começar</em>?
      </Title>

      <Description>Primeira avaliação gratuita. Vamos conversar sobre seus objetivos.</Description>

      <Button
        href="https://wa.me/558598677116?text=Olá! Quero agendar uma avaliação gratuita."
        target="_blank"
        rel="noreferrer"
      >
        Agendar Avaliação Gratuita
      </Button>
    </Section>
  );
}

export default AboutCTA;

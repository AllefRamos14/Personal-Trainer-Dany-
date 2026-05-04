import dany from "../../assets/foto-da-dany.webp";
import {
  BadgeNumber,
  BadgeText,
  Button,
  Content,
  Credential,
  CredentialIcon,
  Credentials,
  CredentialText,
  FloatingBadge,
  Grid,
  ImageBackground,
  ImageContainer,
  Initials,
  Paragraph,
  Section,
  Tag,
  Title,
} from "./styles";

function AboutSection() {
  return (
    <Section>
      <Grid>
        <ImageContainer>
          <ImageBackground>
            <Initials>
              <img src={dany} alt="imagen-da-dany" />
            </Initials>
          </ImageBackground>

          <FloatingBadge className="exp">
            <BadgeNumber>8+ anos</BadgeNumber>
            <BadgeText>de experiência</BadgeText>
          </FloatingBadge>

          <FloatingBadge className="cref">
            <BadgeNumber>CREF ✓</BadgeNumber>
            <BadgeText>Certificada pelo Conselho</BadgeText>
          </FloatingBadge>
        </ImageContainer>

        <Content>
          <Tag>Quem é Dany</Tag>

          <Title>
            Paixão por <em>transformar</em> vidas
          </Title>

          <Paragraph>
            Sou a Dany, personal trainer especializada em treinamento, com foco em evolução real,
            consistência e acompanhamento próximo. Meu trabalho é ajudar cada aluna a desenvolver
            força, confiança e qualidade de vida com um plano feito para sua realidade.
          </Paragraph>

          <Paragraph>
            Acredito que cada mulher merece um acompanhamento que respeite seu corpo, seu ritmo e
            seus objetivos. Por isso, uno metodologia, estratégia e suporte contínuo para tornar a
            jornada mais segura, motivadora e sustentável.
          </Paragraph>

          <Credentials>
            <Credential>
              <CredentialIcon>🎓</CredentialIcon>
              <CredentialText>Graduação em Educação Física</CredentialText>
            </Credential>

            <Credential>
              <CredentialIcon>📋</CredentialIcon>
              <CredentialText>CREF ativo e atuação regularizada</CredentialText>
            </Credential>

            <Credential>
              <CredentialIcon>💪</CredentialIcon>
              <CredentialText>Especialização em treinamento funcional feminino</CredentialText>
            </Credential>

            <Credential>
              <CredentialIcon>🧬</CredentialIcon>
              <CredentialText>Conhecimento em fisiologia do exercício</CredentialText>
            </Credential>

            <Credential>
              <CredentialIcon>🥇</CredentialIcon>
              <CredentialText>Atendimento personalizado presencial e online</CredentialText>
            </Credential>
          </Credentials>

          <Button
            href="https://wa.me/558598677116?text=Olá, Dany! Tudo bem? Estou entrando em contato para falar sobre [Horário de treino]."
            target="_blank"
            rel="noreferrer"
          >
            Falar com a Dany
          </Button>
        </Content>
      </Grid>
    </Section>
  );
}

export default AboutSection;

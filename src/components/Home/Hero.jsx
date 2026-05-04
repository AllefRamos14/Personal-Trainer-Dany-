import personalImg from "../../assets/Dani-Personal.webp";

import {
  Actions,
  Avatar,
  AvatarImg,
  Badge,
  Content,
  Description,
  OutlineButton,
  PrimaryButton,
  Section,
  StatItem,
  StatLabel,
  StatNumber,
  Stats,
  Tag,
  Title,
  Visual,
} from "./styles";

function Hero() {
  return (
    <Section>
      <Content>
        <Badge>Personal Trainer </Badge>

        <Title>
          Transforme seu <br />
          <em>corpo e mente</em>
          <br />
          com quem entende
        </Title>

        <Description>
          Treinamentos personalizados para Você que buscam resultados reais. Metodologia exclusiva,
          acompanhamento dedicado e uma parceria que vai além da academia.
        </Description>

        <Actions>
          <PrimaryButton to="/planos">Ver Planos</PrimaryButton>
          <OutlineButton to="/horarios">Ver Horários</OutlineButton>
        </Actions>

        <Stats>
          <StatItem>
            <StatNumber>3+</StatNumber>
            <StatLabel>Anos de experiência</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>100+</StatNumber>
            <StatLabel>Alunas transformadas</StatLabel>
          </StatItem>

          <StatItem>
            <StatNumber>98%</StatNumber>
            <StatLabel>Satisfação</StatLabel>
          </StatItem>
        </Stats>
      </Content>

      <Visual>
        <Avatar>
          <AvatarImg src={personalImg} alt="Foto da Personal-trainer" />
        </Avatar>

        <Tag className="top-left">
          <strong>CREF</strong>
          <br />
          <small>Certificada</small>
        </Tag>

        <Tag className="bottom-right">
          <strong>✦ Online</strong>
          <br />
          <small>& presencial</small>
        </Tag>
      </Visual>
    </Section>
  );
}

export default Hero;

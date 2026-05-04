import { Description, Icon, Item, Section, Title } from "./styles";

const features = [
  {
    icon: "🎯",
    title: "Treino Personalizado",
    description: "Montado para o seu biotipo e objetivos",
  },
  {
    icon: "📊",
    title: "Avaliação Física",
    description: "Acompanhamento mensal de resultados",
  },
  {
    icon: "🥗",
    title: "Orientação Nutricional",
    description: "Dicas práticas de alimentação saudável",
  },
  {
    icon: "💬",
    title: "Suporte WhatsApp",
    description: "Tire dúvidas a qualquer momento",
  },
];

function FeaturesStrip() {
  return (
    <Section>
      {features.map((item) => (
        <Item key={item.title}>
          <Icon>{item.icon}</Icon>
          <div>
            <Title>{item.title}</Title>
            <Description>{item.description}</Description>
          </div>
        </Item>
      ))}
    </Section>
  );
}

export default FeaturesStrip;

import {
  Author,
  Avatar,
  Card,
  Grid,
  Header,
  Name,
  Section,
  Stars,
  Tag,
  Text,
  Time,
  Title,
} from "./styles";

const testimonials = [
  {
    initials: "AC",
    name: "Ana Carolina",
    time: "Aluna há 8 meses",
    text: "A Dany mudou completamente minha relação com a academia. Em 4 meses perdi 12kg e hoje me sinto confiante e forte!",
  },
  {
    initials: "MB",
    name: "Marina Bezerra",
    time: "Aluna há 1 ano",
    text: "Melhor investimento que já fiz! O treino é intenso mas ela adapta tudo ao seu nível. Recomendo de olhos fechados.",
  },
  {
    initials: "LF",
    name: "Larissa Fontes",
    time: "Aluna há 6 meses",
    text: "Comecei do zero e ela foi super paciente. Hoje treino 5x por semana e amo cada sessão. Ela é mais que personal, é inspiração!",
  },
];

function Testimonials() {
  return (
    <Section>
      <Header>
        <Tag>Resultados Reais</Tag>
        <Title>
          O que minhas <em>alunas</em> dizem
        </Title>
      </Header>

      <Grid>
        {testimonials.map((item) => (
          <Card key={item.name}>
            <Stars>★★★★★</Stars>
            <Text>"{item.text}"</Text>

            <Author>
              <Avatar>{item.initials}</Avatar>
              <div>
                <Name>{item.name}</Name>
                <Time>{item.time}</Time>
              </div>
            </Author>
          </Card>
        ))}
      </Grid>
    </Section>
  );
}

export default Testimonials;

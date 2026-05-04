import { useMemo, useState } from "react";
import { ScheduleData } from "../../../data/ScheduleData";
import ScheduleFilters from "../scheduleFilters/ScheduleFilters";
import ScheduleTable from "../scheduleTable/ScheduleTable";
import {
  BottomBox,
  BottomText,
  Button,
  Container,
  Header,
  Section,
  Subtitle,
  Tag,
  Title,
} from "./styles";

function ScheduleSection() {
  const [currentFilter, setCurrentFilter] = useState("todos");

  const filteredData = useMemo(() => {
    if (currentFilter === "todos") return ScheduleData;
    if (currentFilter === "online") {
      return ScheduleData.filter((item) => item.type === "online");
    }
    if (currentFilter === "disponivel") {
      return ScheduleData.filter((item) => item.status === "disponivel");
    }
    return ScheduleData.filter((item) => item.period === currentFilter);
  }, [currentFilter]);

  function handleSchedule(item) {
    const message = encodeURIComponent(
      `Olá Dany! Quero agendar uma sessão de ${item.modality} na ${item.day} às ${item.time}.`,
    );

    window.open(`https://wa.me/5500000000000?text=${message}`, "_blank");
  }

  return (
    <Section>
      <Header>
        <Tag>Disponibilidade</Tag>
        <Title>
          Horários <em>disponíveis</em>
        </Title>
        <Subtitle>
          Veja os horários em tempo real e escolha a melhor opção para sua rotina.
        </Subtitle>
      </Header>

      <Container>
        <ScheduleFilters currentFilter={currentFilter} onChangeFilter={setCurrentFilter} />

        <ScheduleTable data={filteredData} onSchedule={handleSchedule} />
      </Container>

      <BottomBox>
        <BottomText>Não encontrou o horário ideal? Entre em contato para negociarmos.</BottomText>

        <Button
          href="https://wa.me/558598677116?text=Olá! Quero solicitar um horário especial."
          target="_blank"
          rel="noreferrer"
        >
          Solicitar Horário Especial
        </Button>
      </BottomBox>
    </Section>
  );
}

export default ScheduleSection;

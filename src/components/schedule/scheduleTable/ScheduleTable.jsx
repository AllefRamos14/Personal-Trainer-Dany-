import {
  ActionButton,
  DayText,
  ModalityTag,
  PersonalAvatar,
  PersonalBox,
  PersonalName,
  SlotsText,
  StatusBadge,
  Table,
  TableWrap,
  TBody,
  THead,
  TimeText,
  TypeText,
} from "./styles";

function getStatusLabel(status) {
  if (status === "disponivel") return "Disponível";
  if (status === "poucos") return "Últimas vagas";
  return "Lotado";
}

function getTypeLabel(type) {
  if (type === "online") return "Online";
  if (type === "grupo") return "Grupo";
  return "Individual";
}

function getSlotsText(slots) {
  if (slots === 0) return "–";
  return `${slots} vaga${slots > 1 ? "s" : ""}`;
}

function ScheduleTable({ data, onSchedule }) {
  if (!data.length) {
    return <EmptyState>Nenhum horário encontrado para este filtro.</EmptyState>;
  }

  return (
    <TableWrap>
      <Table>
        <THead>
          <tr>
            <th>Dia</th>
            <th>Horário</th>
            <th>Modalidade</th>
            <th>Personal</th>
            <th>Vagas</th>
            <th>Status</th>
            <th>Ação</th>
          </tr>
        </THead>

        <TBody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>
                <DayText>{item.day}</DayText>
              </td>

              <td>
                <TimeText>{item.time}</TimeText>
              </td>

              <td>
                <ModalityTag $type={item.type}>{item.modality}</ModalityTag>
                <TypeText>{getTypeLabel(item.type)}</TypeText>
              </td>

              <td>
                <PersonalBox>
                  <PersonalAvatar>D</PersonalAvatar>
                  <PersonalName>{item.personal}</PersonalName>
                </PersonalBox>
              </td>

              <td>
                <SlotsText>{getSlotsText(item.slots)}</SlotsText>
              </td>

              <td>
                <StatusBadge $status={item.status}>{getStatusLabel(item.status)}</StatusBadge>
              </td>

              <td>
                <ActionButton disabled={item.status === "lotado"} onClick={() => onSchedule(item)}>
                  Agendar
                </ActionButton>
              </td>
            </tr>
          ))}
        </TBody>
      </Table>
    </TableWrap>
  );
}

export default ScheduleTable;

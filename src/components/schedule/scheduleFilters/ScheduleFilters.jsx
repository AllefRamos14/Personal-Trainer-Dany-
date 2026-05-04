import { FilterButton, Wrapper } from "./styles";

const filters = [
  { label: "Todos", value: "todos" },
  { label: "Manhã", value: "manha" },
  { label: "Tarde", value: "tarde" },
  { label: "Noite", value: "noite" },
  { label: "Online", value: "online" },
  { label: "Disponíveis", value: "disponivel" },
];

function ScheduleFilters({ currentFilter, onChangeFilter }) {
  return (
    <Wrapper>
      {filters.map((filter) => (
        <FilterButton
          key={filter.value}
          $active={currentFilter === filter.value}
          onClick={() => onChangeFilter(filter.value)}
        >
          {filter.label}
        </FilterButton>
      ))}
    </Wrapper>
  );
}

export default ScheduleFilters;

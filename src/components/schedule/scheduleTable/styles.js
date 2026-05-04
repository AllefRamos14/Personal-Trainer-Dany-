import styled from "styled-components";

export const TableWrap = styled.div`
  overflow-x: auto;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  min-width: 900px;
`;

export const THead = styled.thead`
  th {
    padding: 20px 24px;
    text-align: left;
    font-size: 11px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.warmGray};
    background: #fafafa;
    border-bottom: 1px solid #f0eef0;
  }
`;

export const TBody = styled.tbody`
  td {
    padding: 18px 24px;
    font-size: 14px;
    color: ${({ theme }) => theme.colors.charcoal};
    border-bottom: 1px solid #f8f6f8;
    vertical-align: middle;
  }

  tr:hover td {
    background: ${({ theme }) => theme.colors.roseLight};
  }

  tr:last-child td {
    border-bottom: none;
  }
`;

export const DayText = styled.span`
  font-weight: 600;
`;

export const TimeText = styled.span`
  font-weight: 500;
  color: ${({ theme }) => theme.colors.rose};
`;

export const ModalityTag = styled.span`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 8px;
  font-size: 12px;
  font-weight: 600;
  background: ${({ $type, theme }) => {
    if ($type === "online") return "#E3F2FD";
    if ($type === "grupo") return theme.colors.goldLight;
    return theme.colors.roseLight;
  }};
  color: ${({ $type, theme }) => {
    if ($type === "online") return "#1565C0";
    if ($type === "grupo") return "#8B6914";
    return theme.colors.rose;
  }};
`;

export const TypeText = styled.span`
  font-size: 11px;
  color: ${({ theme }) => theme.colors.warmGray};
  margin-left: 6px;
`;

export const PersonalBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const PersonalAvatar = styled.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.rose};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 11px;
  font-weight: 700;
`;

export const PersonalName = styled.span`
  font-weight: 500;
`;

export const SlotsText = styled.span`
  font-weight: 600;
`;

export const StatusBadge = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  background: ${({ $status }) => {
    if ($status === "disponivel") return "#E8F7EE";
    if ($status === "poucos") return "#FFF3E0";
    return "#FDECEA";
  }};
  color: ${({ $status }) => {
    if ($status === "disponivel") return "#1A7A3F";
    if ($status === "poucos") return "#E65100";
    return "#C62828";
  }};
`;

export const ActionButton = styled.button`
  padding: 8px 20px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background: ${({ disabled, theme }) => (disabled ? "#E0D8E0" : theme.colors.rose)};
  color: ${({ disabled }) => (disabled ? "#999" : "white")};
  transition: 0.2s;

  &:hover {
    transform: ${({ disabled }) => (disabled ? "none" : "scale(1.03)")};
    background: ${({ disabled, theme }) => (disabled ? "#E0D8E0" : theme.colors.roseDark)};
  }
`;

export const EmptyState = styled.div`
  text-align: center;
  padding: 48px 24px;
  color: ${({ theme }) => theme.colors.warmGray};
`;

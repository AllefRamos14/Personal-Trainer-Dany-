import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 12px;
  padding: 28px 32px;
  background: ${({ theme }) => theme.colors.charcoal};
  flex-wrap: wrap;
`;

export const FilterButton = styled.button`
  padding: 10px 24px;
  border-radius: 999px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  border: none;
  background: ${({ $active, theme }) => ($active ? theme.colors.rose : "rgba(255, 255, 255, 0.1)")};
  color: ${({ $active }) => ($active ? "white" : "rgba(255, 255, 255, 0.65)")};
  transition: 0.2s;
  letter-spacing: 0.5px;

  &:hover {
    background: ${({ theme }) => theme.colors.rose};
    color: white;
  }
`;

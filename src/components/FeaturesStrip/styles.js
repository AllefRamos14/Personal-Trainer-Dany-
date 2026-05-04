import styled from "styled-components";

export const Section = styled.section`
  background: ${({ theme }) => theme.colors.charcoal};
  padding: clamp(32px, 6vw, 48px) 8%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    margin-top: 10px;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
`;

export const Item = styled.div`
  padding: clamp(20px, 4vw, 32px);
  display: flex;
  align-items: flex-start;
  gap: 16px;
  border-right: 1px solid rgba(255, 255, 255, 0.08);
  transition: background 0.25s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.02);
  }

  &:last-child {
    border-right: none;
  }

  @media (max-width: 900px) {
    border-right: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  @media (max-width: 600px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 14px;
  }
`;

export const Icon = styled.div`
  width: clamp(38px, 10vw, 44px);
  height: clamp(38px, 10vw, 44px);
  border-radius: 12px;
  background: rgba(200, 88, 122, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(18px, 4vw, 20px);
  flex-shrink: 0;
`;

export const Title = styled.h3`
  font-size: clamp(14px, 3.5vw, 15px);
  font-weight: 600;
  color: white;
  margin-bottom: 6px;
  line-height: 1.3;
`;

export const Description = styled.p`
  font-size: clamp(12px, 3.2vw, 13px);
  color: rgba(255, 255, 255, 0.55);
  line-height: 1.6;
`;

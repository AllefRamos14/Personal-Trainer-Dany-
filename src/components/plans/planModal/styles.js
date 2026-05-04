import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(4px);
  display: ${({ $open }) => ($open ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const Modal = styled.div`
  background: white;
  border-radius: 32px;
  padding: 48px;
  max-width: 480px;
  width: 100%;
  position: relative;

  @media (max-width: 600px) {
    padding: 32px 24px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 24px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.warmGray};
  line-height: 1;
`;

export const Title = styled.h3`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 28px;
  margin-bottom: 8px;

  em {
    color: ${({ theme }) => theme.colors.rose};
    font-style: italic;
  }
`;

export const Description = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.warmGray};
  margin-bottom: 28px;
  line-height: 1.6;
`;

export const InfoBox = styled.div`
  background: ${({ theme }) => theme.colors.roseLight};
  border-radius: 16px;
  padding: 20px 24px;
  margin-bottom: 24px;
  font-size: 14px;
  line-height: 1.6;

  strong {
    color: ${({ theme }) => theme.colors.rose};
  }
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const WhatsButton = styled.a`
  background: #25d366;
  color: white;
  padding: 16px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: 0.25s;

  &:hover {
    background: #1db954;
  }
`;

export const CancelButton = styled.button`
  background: transparent;
  color: ${({ theme }) => theme.colors.warmGray};
  padding: 14px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid ${({ theme }) => theme.colors.border};
  cursor: pointer;
  transition: 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.cream};
  }
`;

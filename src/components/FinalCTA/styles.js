import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 8%;
  background: ${({ theme }) => theme.colors.charcoal};
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    height: 600px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(200, 88, 122, 0.15) 0%, transparent 70%);
  }
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: clamp(36px, 5vw, 64px);
  color: white;
  margin-bottom: 20px;
  position: relative;

  em {
    color: ${({ theme }) => theme.colors.rose};
    font-style: italic;
  }
`;

export const Description = styled.p`
  font-size: 17px;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 40px;
  position: relative;
`;

export const Actions = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  position: relative;
  flex-wrap: wrap;
`;

export const WhatsAppButton = styled.a`
  background: #25d366;
  color: white;
  padding: 18px 40px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  transition: 0.25s;
  display: inline-flex;
  align-items: center;
  gap: 10px;

  &:hover {
    background: #1db954;
    transform: translateY(-2px);
  }
`;

export const OutlineButton = styled.a`
  background: transparent;
  color: white;
  padding: 18px 40px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid rgba(255, 255, 255, 0.4);
  transition: 0.25s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
  }
`;

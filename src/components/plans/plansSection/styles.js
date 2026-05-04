import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 8%;
  background: white;
`;

export const Header = styled.div`
  text-align: center;
  margin-bottom: 64px;
`;

export const Tag = styled.div`
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.rose};
  margin-bottom: 16px;
`;

export const Title = styled.h2`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: clamp(32px, 4vw, 52px);
  line-height: 1.15;
  color: ${({ theme }) => theme.colors.charcoal};
  margin-bottom: 16px;

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.rose};
  }
`;

export const Subtitle = styled.p`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.warmGray};
  max-width: 560px;
  margin: 0 auto;
  line-height: 1.7;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;

  @media (max-width: 980px) {
    grid-template-columns: 1fr;
    max-width: 450px;
  }
`;

export const BottomBox = styled.div`
  text-align: center;
  margin-top: 48px;
  padding-top: 40px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`;

export const BottomText = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.warmGray};
  margin-bottom: 20px;
`;

export const OutlineButton = styled.a`
  display: inline-block;
  background: transparent;
  color: ${({ theme }) => theme.colors.rose};
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  border: 2px solid ${({ theme }) => theme.colors.rose};
  transition: 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.roseLight};
    transform: translateY(-2px);
  }
`;

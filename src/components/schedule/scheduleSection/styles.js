import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 8%;
  background: ${({ theme }) => theme.colors.cream};
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

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  background: white;
  border-radius: 32px;
  overflow: hidden;
  box-shadow: 0 16px 64px rgba(0, 0, 0, 0.06);
`;

export const BottomBox = styled.div`
  margin-top: 40px;
  text-align: center;
`;

export const BottomText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.warmGray};
  margin-bottom: 16px;
`;

export const Button = styled.a`
  display: inline-block;
  background: ${({ theme }) => theme.colors.rose};
  color: white;
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  transition: 0.25s;

  &:hover {
    background: ${({ theme }) => theme.colors.roseDark};
    transform: translateY(-2px);
  }
`;

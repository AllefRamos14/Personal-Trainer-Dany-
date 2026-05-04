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

  em {
    font-style: italic;
    color: ${({ theme }) => theme.colors.rose};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  max-width: 1100px;
  margin: 0 auto;
 

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

export const Card = styled.div`
  padding: 32px;
  background: ${({ theme }) => theme.colors.cream};
  border-radius: 24px;
  border: 1px solid ${({ theme }) => theme.colors.border};
  
`;

export const Stars = styled.div`
  color: ${({ theme }) => theme.colors.gold};
  font-size: 16px;
  margin-bottom: 16px;
  letter-spacing: 2px;
`;

export const Text = styled.p`
  font-size: 15px;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.warmGray};
  margin-bottom: 24px;
  font-style: italic;
`;

export const Author = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Avatar = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.rose};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 16px;
  color: white;
  font-weight: 700;
`;

export const Name = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.charcoal};
`;

export const Time = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.warmGray};
`;

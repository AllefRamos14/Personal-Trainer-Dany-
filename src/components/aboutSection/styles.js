import styled from "styled-components";

export const Section = styled.section`
  padding: 100px 8%;
  background: ${({ theme }) => theme.colors.cream};
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 50px;
  }
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageBackground = styled.div`

  @media (max-width: 900px) {
    height: 420px;
  }
`;

export const Initials = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 180px;
  color: rgba(200, 88, 122, 0.12);
  font-style: italic;
  user-select: none;
  line-height: 1;

  img{
   width: 100%;
    height: 100%;
    border-radius: 10%;
    object-fit: cover; 
    display: block;
  }

  @media (max-width: 900px) {
    font-size: 120px;
  }
`;

export const FloatingBadge = styled.div`
  position: absolute;
  background: white;
  border-radius: 20px;
  padding: 20px 24px;
  box-shadow: 0 12px 48px rgba(0, 0, 0, 0.1);

  &.exp {
    top: -24px;
    right: 10%;
  }

  &.cref {
    bottom: -24px;
    left: 10%;
  }

  @media (max-width: 900px) {
    position: static;
    margin-top: 16px;
  }
`;

export const BadgeNumber = styled.span`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 28px;
  color: ${({ theme }) => theme.colors.rose};
  display: block;
`;

export const BadgeText = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.warmGray};
`;

export const Content = styled.div``;

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
  font-size: clamp(32px, 3.5vw, 48px);
  line-height: 1.2;
  margin-bottom: 24px;
  color: ${({ theme }) => theme.colors.charcoal};

  em {
    color: ${({ theme }) => theme.colors.rose};
    font-style: italic;
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.warmGray};
  margin-bottom: 20px;
`;

export const Credentials = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 32px 0;
`;

export const Credential = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 14px 20px;
  background: white;
  border-radius: 12px;
  border: 1px solid ${({ theme }) => theme.colors.border};
`;

export const CredentialIcon = styled.span`
  font-size: 18px;
`;

export const CredentialText = styled.span`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.charcoal};
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

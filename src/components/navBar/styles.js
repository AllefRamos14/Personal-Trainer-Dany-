import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Wrapper = styled.nav`
  position: sticky;
  top: 0;
  z-index: 100;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background: rgba(250, 248, 245, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  @media (max-width: 768px) {
    height: auto;
    padding: 16px 20px;
    flex-direction: column;
    gap: 12px;
  }
`;

export const Logo = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: clamp(20px, 5vw, 22px);
  color: ${({ theme }) => theme.colors.rose};

  span {
    color: ${({ theme }) => theme.colors.gold};
    font-style: italic;
  }

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const NavLinks = styled.ul`
  display: flex;
  gap: 28px;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px 18px;
  }
`;

export const StyledLink = styled(NavLink)`
  font-size: 13px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.warmGray};
  text-transform: uppercase;
  letter-spacing: 0.5px;
  text-decoration: none;
  transition: color 0.2s ease;

  &.active,
  &:hover {
    color: ${({ theme }) => theme.colors.rose};
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const CTA = styled.a`
  background: ${({ theme }) => theme.colors.rose};
  color: white;
  padding: 10px 22px;
  border-radius: 999px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  transition:
    transform 0.25s ease,
    opacity 0.25s ease,
    box-shadow 0.25s ease;

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 10px 24px rgba(200, 88, 122, 0.25);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 260px;
    text-align: center;
  }
`;

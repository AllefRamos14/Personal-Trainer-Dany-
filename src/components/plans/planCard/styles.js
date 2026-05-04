import styled from "styled-components";

export const Card = styled.article`
  border: 1px solid
    ${({ theme, $featured }) => ($featured ? theme.colors.rose : theme.colors.border)};
  border-radius: 32px;
  padding: 40px 36px;
  background: ${({ theme, $featured }) => ($featured ? theme.colors.rose : theme.colors.white)};
  color: ${({ $featured }) => ($featured ? "white" : "inherit")};
  position: relative;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 24px 64px rgba(200, 88, 122, 0.15);
  }
`;

export const PopularTag = styled.div`
  position: absolute;
  top: -14px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.gold};
  color: white;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 20px;
  border-radius: 999px;
  white-space: nowrap;
`;

export const Name = styled.div`
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: ${({ theme, $featured }) => ($featured ? "rgba(255,255,255,0.75)" : theme.colors.rose)};
  margin-bottom: 8px;
`;

export const Price = styled.div`
  font-family: ${({ theme }) => theme.fonts.title};
  font-size: 52px;
  line-height: 1;
  color: ${({ $featured }) => ($featured ? "white" : "inherit")};
  margin-bottom: 4px;
`;

export const Detail = styled.div`
  font-size: 13px;
  color: ${({ theme, $featured }) =>
    $featured ? "rgba(255,255,255,0.65)" : theme.colors.warmGray};
  margin-bottom: 28px;
`;

export const Divider = styled.div`
  height: 1px;
  background: ${({ theme, $featured }) =>
    $featured ? "rgba(255,255,255,0.2)" : theme.colors.border};
  margin-bottom: 28px;
`;

export const Features = styled.ul`
  margin-bottom: 36px;
`;

export const Feature = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  color: ${({ $featured }) => ($featured ? "rgba(255,255,255,0.9)" : "inherit")};
  padding: 8px 0;
`;

export const Check = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: ${({ theme, $featured }) =>
    $featured ? "rgba(255,255,255,0.25)" : theme.colors.roseLight};
  color: ${({ theme, $featured }) => ($featured ? "white" : theme.colors.rose)};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
  font-weight: 700;
`;

export const Button = styled.button`
  width: 100%;
  padding: 16px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.25s;
  border: 2px solid
    ${({ theme, $featured }) => ($featured ? "white" : theme.colors.rose)};
  background: ${({ $featured }) => ($featured ? "white" : "transparent")};
  color: ${({ theme, $featured }) => ($featured ? theme.colors.rose : theme.colors.rose)};

  &:hover {
    transform: translateY(-1px);
    background: ${({ theme, $featured }) =>
      $featured ? theme.colors.roseLight : theme.colors.rose};
    color: ${({ $featured }) => ($featured ? "#A94463" : "white")};
  }
`;

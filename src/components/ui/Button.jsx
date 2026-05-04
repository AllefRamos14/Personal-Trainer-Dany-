import styled, { css } from "styled-components";

const variants = {
  primary: css`
    background: ${({ theme }) => theme.colors.rose};
    color: white;
    border: 2px solid ${({ theme }) => theme.colors.rose};

    &:hover {
      background: ${({ theme }) => theme.colors.roseDark};
      border-color: ${({ theme }) => theme.colors.roseDark};
      transform: translateY(-2px);
    }
  `,
  outline: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.rose};
    border: 2px solid ${({ theme }) => theme.colors.rose};

    &:hover {
      background: ${({ theme }) => theme.colors.roseLight};
      transform: translateY(-2px);
    }
  `,
  whatsapp: css`
    background: #25d366;
    color: white;
    border: 2px solid #25d366;

    &:hover {
      background: #1db954;
      border-color: #1db954;
      transform: translateY(-2px);
    }
  `,
};

const Button = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 16px 32px;
  border-radius: 999px;
  font-size: 15px;
  font-weight: 600;
  transition: 0.25s;
  cursor: pointer;

  ${({ $variant = "primary" }) => variants[$variant]}
`;

export default Button;

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.body};
    background: ${({ theme }) => theme.colors.cream};
    color: ${({ theme }) => theme.colors.charcoal};
  }

  button, a {
    font-family: inherit;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }
`;

// src/styles/GlobalStyles.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle<{ theme: unknown }>`
  body {
    background-color: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  h2 {
    color: ${({ theme }) => theme.text};
  }

  input {
    background-color: ${({ theme }) => theme.cardBackground};
    color: ${({ theme }) => theme.text};
    border: 1px solid ${({ theme }) => theme.text};
  }

  button {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: white;
    &:hover {
      background-color: ${({ theme }) => theme.buttonHoverBackground};
    }
  }

  .card {
    background-color: ${({ theme }) => theme.cardBackground};
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  a {
    color: ${({ theme }) => theme.linkColor};
    &:hover {
      color: ${({ theme }) => theme.hoverLinkColor};
    }
  }

  .navbar {
    background-color: ${({ theme }) => theme.navbarBackground};
    border: 1px solid ${({ theme }) => theme.border};
    border-radius: 10px;
  }
`;

import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    ::-webkit-scrollbar-thumb {
      background: var(--red-color);
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(238, 89, 91, 0.7);
    }
  }

  body {
    background-color: var(--white-color);
    color: #29292e;
  }

  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }

  :root {
    --red-color: #ee595b;
    --grey-color: #737388;
    --grey-light-color: #a8a8b3;
    --blue-color: rgb(48, 167, 215);
    --background-color: #f4f5f8;
    --icons-color: #1D407F;
    --logo-font: 'Edo', sans-serif;
    --title-font: 700 'Poppins', sans-serif;
  }

  li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }
`;

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
      background: lightgray;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb:hover {
      background: rgba(211, 211, 211, 0.7);
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
    --purple-color: #8166CB;
    --grey-color: #4B4B4B;
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
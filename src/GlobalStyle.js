import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans KR', sans-serif;
  }

  body {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .bubble {
    font-family: 'Poor Story', cursive;
  }
`;

export default GlobalStyle;

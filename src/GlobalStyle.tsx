import { createGlobalStyle } from 'styled-components';

import { COLOR, SIZE } from './constants/styles';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: ${COLOR.backdrop};
  }

  #header {
    padding: ${SIZE.size16} ${SIZE.size24};
  }

  #main {
    padding: ${SIZE.size16} ${SIZE.size24};
  }
`;

export default GlobalStyle;

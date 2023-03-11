import { createGlobalStyle } from 'styled-components';

import { COLOR, FONT_SIZE, SIZE } from './constants/styles';

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

  * {
    font-size: ${FONT_SIZE.primary};
    color: ${COLOR.black};
  }
`;

export default GlobalStyle;

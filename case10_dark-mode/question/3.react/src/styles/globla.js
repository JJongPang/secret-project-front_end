import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*,
*::after,
*::before {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans';
    font-weight: 300;
    /* visibility: hidden; */
    /* FOIT 방지 */
}
`;

export default GlobalStyle;

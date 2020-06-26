import { createGlobalStyle } from 'styled-components';

import ArapeyRegular from '../assets/fonts/ArapeyRegular/Arapey Regular/Arapey-Regular.woff';

const GlobalStyle = createGlobalStyle`

@font-face {
font-family: 'Arapey Regular';
src: (${ArapeyRegular}) format("woff");
}

* {
    box-sizing: border-box;
}

*, *:before, *:after {
    -moz-box-sizing: border-box; 
    -webkit-box-sizing: border-box; 
    box-sizing: border-box;
}

body, html {
    margin: 0;
    padding: 0;
    overflow-x:hidden;
    font-family: 'Raleway', sans-serif;
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;

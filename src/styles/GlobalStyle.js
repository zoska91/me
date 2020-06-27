import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`


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
}

ul {
    list-style: none;
    margin: 0;
    padding: 0;
}
`;

export default GlobalStyle;

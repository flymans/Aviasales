import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
}
body {
    @import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
}
`;

export default GlobalStyle;

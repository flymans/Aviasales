import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

* {
    box-sizing: border-box;
}

body {
    font-family: 'Open Sans', sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 20px;
    margin: 0;
    background: #f3f7fa;
}
`;

export default GlobalStyle;

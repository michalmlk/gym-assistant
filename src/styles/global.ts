import {createGlobalStyle} from "styled-components"

export const GlobalStyle =  createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap');
  
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Open Sans', sans-serif;
  }

  #root {
    margin: 0 auto;
  }
`;
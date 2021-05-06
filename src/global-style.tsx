import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  html {
    font-family: 'Source Sans Pro', sans-serif;
    background: white;
    font-size: 10px;
    font-weight: 400;
    line-height: 1.5;
  }
  
  html, body, #root, main {
    height: 100%;
  }
  
  #root {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  
  main {
    max-height: 90%;
    display: grid;
    grid-template-rows: 6rem 1fr;
    grid-template-columns: minmax(32rem, 40rem);
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

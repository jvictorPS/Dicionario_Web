import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.cores.fundo};
  }
`

export default Global
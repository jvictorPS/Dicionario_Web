import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    justify-content: center;
    background-color: ${props => props.theme.cores.fundo};
  }

  .ant-dropdown .ant-dropdown-menu {
    box-shadow: 
    0 6px 16px 0 ${props => props.theme.cores.sombra}, 
    0 3px 6px -4px ${props => props.theme.cores.sombra}, 
    0 9px 28px 8px ${props => props.theme.cores.sombra};
  }

  .ant-dropdown-menu-title-content {
    color: ${props => props.theme.cores.textoPrincipal};
    font-weight: 700;

  }

  .itens-menu {
    :hover {
      color: ${props => props.theme.cores.roxo};
    }
  }
`

export default Global
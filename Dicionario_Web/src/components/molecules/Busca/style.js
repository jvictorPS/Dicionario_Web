import styled from 'styled-components'

export const InputBusca = styled.div`
    background-color: ${props => props.theme.cores.corInput};
    height: 64px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    margin: 45px 0;
    padding: 0 20px;
    border: ${props => props.vazio ? '1px solid red' : 'none'};

    &:hover , &:focus {
        border: 1px solid #A445ED;
    }
`

export const Buscador = styled.input`
    background-color: transparent;
    width: 700px;
    height: 50px;
    font-size: 20px;
    font-weight: 700;
    outline: none;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    color: ${props => props.theme.cores.textoPrincipal};
    font-family: ${props => props.theme.fonte};
    -moz-appearance: none;

    &::placeholder {
        color: ${props => props.theme.cores.textoPrincipal};
        font-size: 20px;
        font-weight: 700;
        opacity: 0.25;
        font-family: ${props => props.theme.fonte}
    }
`

export const BotaoBusca = styled.button`
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: ${props => props.theme.cores.corInput};

    &:hover , &:focus {
        cursor: pointer;
    }
`
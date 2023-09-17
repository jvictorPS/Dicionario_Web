import styled from 'styled-components'

export const InputBusca = styled.div`
    background-color: #F4F4F4;
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
    -moz-appearance: none;

    &::placeholder {
        color: #2D2D2D;
        font-size: 20px;
        font-weight: 700;
        opacity: 0.25
    }
`

export const BotaoBusca = styled.button`
    border: none;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover , &:focus {
        cursor: pointer;
    }
`

export const ContainerPalavra = styled.h1`
    font-size: 55px;
    color: #2D2D2D;
    font-weight: 700;
`

export const ContainerPrimeiraSessao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`

export const ContainerFonetica = styled.p`
    color: #A445ED;
    font-size: 24px;
    font-weight: 400;
`
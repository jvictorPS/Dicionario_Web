import styled from 'styled-components'

export const InputBusca = styled.div`
    background-color: #F4F4F4;
    height: 64px;
    border-radius: 16px;
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    align-items: center;
    padding: 0 20px;

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
        cursor: pointer
    }
`
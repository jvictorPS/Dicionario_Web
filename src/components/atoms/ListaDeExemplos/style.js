import styled from "styled-components"

export const ContainerExemplos = styled.div`
    display: grid;
    grid-template-columns: 1fr 6fr;
    gap: 22px;
`
export const Titulo = styled.h3`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    color: ${props => props.theme.cores.textoSecundaria};;
`

export const ContainerPlavras = styled.div`
    display: flex;
    flex-wrap: wrap;
`

export const Palavra = styled.p`
    font-size: 20px;
    color: ${props => props.theme.cores.roxo};;
    font-weight: 700;
    margin-right: 10px;
`

export const Separador = styled.div`
    color: #757575;
    font-weight: 400;

`
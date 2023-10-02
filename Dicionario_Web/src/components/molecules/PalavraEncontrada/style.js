import styled from "styled-components";

export const ContainerPalavra = styled.h1`
    font-size: 55px;
    color: ${props => props.theme.cores.textoPrincipal};;
    font-weight: 700;
`

export const ContainerPrimeiraSessao = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
`

export const ContainerFonetica = styled.p`
    color: ${props => props.theme.cores.roxo};;
    font-size: 24px;
    font-weight: 400;
`

export const Titulo = styled.h3`
    color: ${props => props.theme.cores.textoPrincipal};
    margin: 30px 0;
    font-size: 24px;
`
import styled from "styled-components";

export const ContainerErro = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 25px;
`

export const Emoticon = styled.img`
    width: 64px;
    height: 64px;
`

export const TextoErro = styled.p`
    color: ${props => props.theme.cores.textoSecundaria};;
    font-size: 18px;
`

export const TituloErro = styled.h3`
    color: ${props => props.theme.cores.textoPrincipal};;
    font-size: 20px;
    font-weight: 700;

`
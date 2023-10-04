import styled from "styled-components"
import IconeOval from "../../../assets/Oval.svg"

export const ItemLista = styled.li`
    list-style-image: url(${IconeOval});
    margin-left: 22px;
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 13px;
`

export const Lista = styled.ul`
    margin-bottom: 40px;
`

export const Texto = styled.p`
    margin-left: 20px;
    color: ${props => props.theme.cores.textoPrincipal};
    font-family: ${props => props.theme.fonte}
`

export const Titulo = styled.h3`
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    color: ${props => props.theme.cores.textoSecundaria};;
    margin-bottom: 25px;
`
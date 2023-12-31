import styled from "styled-components"

export const ContainerRodape = styled.footer`
    display: flex;
    border-top: 1px solid #E9E9E9;
    padding-top: 20px;

    @media (max-width: 435px) {
        height: 100px
    }
`

export const Source = styled.div`
    font-size: 14px;
    font-weight: 400;
    color: #757575;
    margin-right: 20px;
`

export const Link = styled.a`
    font-size: 14px;
    font-weight: 400;
    text-decoration: none;
    color: ${props => props.theme.cores.textoPrincipal};;
    gap: 10px;
`
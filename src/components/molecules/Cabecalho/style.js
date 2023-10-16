import styled from 'styled-components'
import { Space } from 'antd'

export const ContainerCabecalho = styled.header`
    margin-top: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;

    @media (max-width: 435px) {
        margin-top: 15px;
    }
`

export const ContainerConfgCabecalho = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

export const SpaceModificado = styled(Space)`
    color: ${props => props.theme.cores.textoPrincipal};
    font-weight: 700;
    width: 120px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Separador = styled.div`
    border-right: 2px solid #E9E9E9;
    height: 32px;
`

export const Fonte = styled.div`
    width: 90px;
    display: flex;
    justify-content: flex-end
`
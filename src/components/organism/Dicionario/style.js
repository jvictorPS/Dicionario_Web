import styled from 'styled-components'

export const ContainerDicionario = styled.div`
    width: 736px;
    margin: 0 auto;
    font-family: ${props => props.theme.fonte};

    @media (max-width: 768px) {
        width: 688px;
    }

    @media (max-width: 700px) {
        width: 615px;
    }

    @media (max-width: 620px) {
        width: 550px;
    }

    @media (max-width: 570px) {
        width: 500px;
    }

    @media (max-width: 510px) {
        width: 435px;
    }

    @media (max-width: 435px) {
        width: 327px;
    }
`
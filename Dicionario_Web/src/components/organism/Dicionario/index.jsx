import Busca from '../../molecules/Busca'
import  Cabecalho  from  '../../molecules/Cabecalho/index'
import { ContainerDicionario } from './style'

export default function Dicionario() {
    return (
        <ContainerDicionario>

            <Cabecalho />

            <Busca/>

        </ContainerDicionario>
    )
}
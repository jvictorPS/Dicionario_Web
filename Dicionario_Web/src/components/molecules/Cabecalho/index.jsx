import IconeLivro from '../../../assets/iconoir_book.png'
import { ContainerCabecalho, ContainerConfgCabecalho } from './style'

export default function Cabecalho() {
    return (
        <ContainerCabecalho>

            <img src={IconeLivro} alt="icone de um livro" />

            <ContainerConfgCabecalho>
                <div>teste</div>
            </ContainerConfgCabecalho>

        </ContainerCabecalho>
    )
}
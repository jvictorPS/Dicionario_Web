/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { useContext } from 'react'
import IconeLivro from '../../../assets/iconoir_book.png'
import { ContainerCabecalho, ContainerConfgCabecalho } from './style'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'



export default function Cabecalho({mudarTema}) {

    const { cores , titulo , iconeLua } = useContext(ThemeContext)

    return (
        <ContainerCabecalho>

            <img src={IconeLivro} alt="icone de um livro" />

            <ContainerConfgCabecalho>
                <Switch
                    onChange={mudarTema}
                    checked={titulo === 'dark'}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={20}
                    width={40}
                    handleDiameter={14}
                    offColor={cores.textoSecundaria}
                    onColor={cores.roxo}
                    activeBoxShadow='none'
                />

                <img src={iconeLua} alt="icone de um livro" />

            </ContainerConfgCabecalho>

        </ContainerCabecalho>
    )
}
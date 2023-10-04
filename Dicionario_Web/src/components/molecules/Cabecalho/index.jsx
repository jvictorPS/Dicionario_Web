/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { useContext, useState } from 'react'
import IconeLivro from '../../../assets/iconoir_book.png'
import IconeSeta from '../../../assets/icon-arrow-down.svg'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { Dropdown } from 'antd';

import { 
        ContainerCabecalho, 
        ContainerConfgCabecalho,
        SpaceModificado,
        Fonte,
        Separador
    
    } from './style'

export default function Cabecalho({mudarTema , mudarFonte}) {

    const { cores , titulo , iconeLua } = useContext(ThemeContext)
    const [ fonteAtual , setFonteAtual ] = useState('Sans Serif')

    const onClick = ( e ) => {
        mudarFonte(e.key)
        console.log(e)
        setFonteAtual(e.domEvent.nativeEvent.target.innerText)
    }

    const items = [
        {
            label: 'Sans Serif',
            key: 'Inter, sans-serif',
            className: 'itens-menu',
        },
        {
            label: 'Serif',
            key: 'Lora, serif',
            className: 'itens-menu',
        },
        {
            label: 'Mono',
            key: 'Inconsolata, monospace',
            className: 'itens-menu',
        },
    ]

    return (
        <ContainerCabecalho>

            <img src={IconeLivro} alt="icone de um livro" />

            <ContainerConfgCabecalho>

                <Dropdown
                    menu={{
                        items,
                        onClick: onClick,
                        style:{
                            backgroundColor: cores.corInput,
                        },
                    }}

                    >

                    <a onClick={(e) => e.preventDefault()}>
                        <SpaceModificado>

                            <Fonte>
                            {fonteAtual}

                            </Fonte>
                            <img src={IconeSeta} alt="seta para baixo" />
                        </SpaceModificado>
                    </a>
                </Dropdown>

                <Separador />

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
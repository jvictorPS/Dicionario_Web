/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { useContext, useState } from 'react'
import IconeLivro from '../../../assets/iconoir_book.png'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';

import { 
        ContainerCabecalho, 
        ContainerConfgCabecalho,
    
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
        },
        {
            label: 'Serif',
            key: 'Lora, serif',
        },
        {
            label: 'Mono',
            key: 'Inconsolata, monospace',
        },
    ]

    const corDoTexto = props => props.theme.cores.textoPrincipal

    return (
        <ContainerCabecalho>

            <img src={IconeLivro} alt="icone de um livro" />

            <ContainerConfgCabecalho>

                <Dropdown
                    menu={{
                        items,
                        onClick: onClick,
                        style: {
                            color: 'red',
                        }
                    }}
                    
                    >

                    <a onClick={(e) => e.preventDefault()}>
                        <Space
                            style={{
                                color: {corDoTexto},
                            }}
                        >
                            {fonteAtual}
                            <DownOutlined />
                        </Space>
                    </a>
                </Dropdown>

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
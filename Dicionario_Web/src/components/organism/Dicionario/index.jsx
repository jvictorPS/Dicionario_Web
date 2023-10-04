import { useState } from 'react'
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import Busca from '../../molecules/Busca'
import  Cabecalho  from  '../../molecules/Cabecalho/index'
import { ContainerDicionario } from './style'

export default function Dicionario({mudarTema , mudarFonte}) {

    return (
        <ContainerDicionario>

            <Cabecalho mudarTema={mudarTema} mudarFonte={mudarFonte}/>

            <Busca/>

        </ContainerDicionario>
    )
}
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import IconeLink from '../../../assets/tabler_external-link.png'

import {
    ContainerRodape,
    Source,
    Link
} from './style'

export default function Rodape({URL}) {
    return (
        <ContainerRodape>
            <Source>Source</Source>
            <Link href={URL} target='_blank'>{URL} <img style={{marginLeft:'10px'}} src={IconeLink} alt="Icone de link"/></Link>
        </ContainerRodape>
    )
}
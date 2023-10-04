/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { 
    ItemLista,
    Lista,
    Texto,
    Titulo 
} from './style'

export default function ListaDeDefinicoes({exemplos}) {

    return (
        <Lista>
            <Titulo>Meaning</Titulo>

            {exemplos.map((item , index) => (
                <ItemLista key={index}><Texto>{item}</Texto></ItemLista>
            ))}
        </Lista>
    )
}
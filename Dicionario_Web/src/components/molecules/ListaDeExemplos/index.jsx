/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import { 
    Titulo,
    ContainerExemplos,
    Palavra,
    ContainerPlavras

} from './style'

export default function ListaDeExemplos({exemplos}) {

    return (
        <ContainerExemplos>
            <Titulo>Synonyms</Titulo>

            <ContainerPlavras>
                {exemplos.map((item , index) => (
                    <Palavra key={index}>{item}</Palavra>
                    
                ))}
            </ContainerPlavras>
        
        </ContainerExemplos>
    )
}
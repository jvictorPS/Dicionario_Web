/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

import BotaoPay from '../../atoms/BotaoPlay'
import ListaDeDefinicoes from '../../atoms/ListaDeDefinicoes'
import ListaDeExemplos from '../../atoms/ListaDeExemplos'
import Rodape from '../Rodape'


import { 
    ContainerPalavra,
    ContainerPrimeiraSessao,
    ContainerFonetica,

} from './style'

export default function PalavraEncontrada({
    palavra,
    phonetica,
    audio,
    sinonimos,
    exemploSinonimos,
    verbos,
    buscaURL
}) 

{
    return (
        <div>
            <ContainerPrimeiraSessao>
                <div>
                        <ContainerPalavra>
                            {palavra}
                        </ContainerPalavra>

                        <ContainerFonetica>
                            {phonetica}
                        </ContainerFonetica>
                    </div>
                <BotaoPay AudioURL={audio} />
            </ContainerPrimeiraSessao>

        <h3>noun</h3>
            <ListaDeDefinicoes exemplos={sinonimos} />
            <ListaDeExemplos exemplos={exemploSinonimos} />

        <h3>verb</h3>
            <ListaDeDefinicoes exemplos={verbos} />

            <Rodape URL={buscaURL} />
    </div>
    )
}
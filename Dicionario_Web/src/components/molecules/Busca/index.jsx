import { useState } from 'react'
import axios from 'axios'

import buscarDefinicoes from '../../../utils/buscarDefinicoes'
import buscarSinonimos from '../../../utils/buscarSinonimos'
import buscarAudio from '../../../utils/buscarAudio'

import iconeBusca from '../../../assets/icon-search.svg'

import { 
    InputBusca, 
    Buscador, 
    BotaoBusca,
    ContainerPalavra,
    ContainerPrimeiraSessao,
    ContainerFonetica,

} from './style'

import PalavraNaoEncontrada from '../PalavraNaoEncontrada'
import BotaoPay from '../BotaoPlay'
import ListaDeDefinicoes from '../ListaDeDefinicoes'
import ListaDeExemplos from '../ListaDeExemplos'
import Rodape from '../Rodape'

export default function Busca() {

    const [pegaPalavra, setPegaPalavra] = useState('')
    const [resultado , setResultado] = useState(null)
    const [erro, setErro] = useState(null)
    
    const [palavra , setPalavra] = useState('')
    const [phonetica , setPhonetica] = useState('')
    const [audio , setAudio] = useState('')
    const [sinonimos , setSinonimos] = useState([])
    const [verbos , setVerbos] = useState([])
    const [exemploSinonimos , setExemplosSinonimos] = useState([])
    const [buscaURL , setBuscaURL] = useState('')
    const [inputVazio , setInputVazio] = useState(false)

    const handleSearchChange = (event) => {
        setPegaPalavra(event.target.value)
    }

    const handleSearchClick = () => {

        if(pegaPalavra === '') {
            return setInputVazio(true)
        } else {
            setInputVazio(false)
        }

        axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${pegaPalavra}`)
        .then((response) => {
            setResultado(response.data)
            handleRequestProcessing(response.data)
            setErro('')
        })
        .catch((error) => {
            setErro(error.response)
        })
    }

    const handleRequestProcessing = (data) => {
        if (data.length > 0) {
            const primeiroObjetoRequisicao = data[0]

            setPalavra(primeiroObjetoRequisicao.word)
            setPhonetica(primeiroObjetoRequisicao.phonetic)
            setSinonimos(buscarDefinicoes(primeiroObjetoRequisicao.meanings , 'noun'))
            setVerbos(buscarDefinicoes(primeiroObjetoRequisicao.meanings , 'verb'))
            setExemplosSinonimos(buscarSinonimos(primeiroObjetoRequisicao.meanings , 'noun'))
            setBuscaURL(primeiroObjetoRequisicao.sourceUrls[0])
            setAudio(buscarAudio(primeiroObjetoRequisicao.phonetics))

        } else {
            return
        }
    }

    return (
        <div>
        
        <InputBusca vazio={inputVazio}>
            <Buscador
                type="text"
                id="search"
                name="search"
                placeholder="Search for any word…"
                value={pegaPalavra}
                onChange={handleSearchChange}
                autoComplete='off'
            />
            <BotaoBusca onClick={handleSearchClick}>
                <img src={iconeBusca} />
            </BotaoBusca>
        </InputBusca>

        {erro !== '' ? 
            <PalavraNaoEncontrada />
        :
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
        }
        </div>
    )
}
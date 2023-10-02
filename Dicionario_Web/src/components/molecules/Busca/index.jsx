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

} from './style'

import PalavraNaoEncontrada from '../../atoms/PalavraNaoEncontrada'
import PalavraEncontrada from '../PalavraEncontrada'


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
    const [click , setClick] = useState(false)

    const handleSearchChange = (event) => {
        setPegaPalavra(event.target.value)
    }

    const handleSearchClick = () => {

        setClick(true)

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

        {click === false ? 
            <></>
        :

        erro !== '' ?

        <PalavraNaoEncontrada/>

        :

        <PalavraEncontrada 
            palavra={palavra}
            phonetica={phonetica}
            audio={audio}
            sinonimos={sinonimos}
            exemploSinonimos={exemploSinonimos}
            verbos={verbos}
            buscaURL={buscaURL}
            />

        }
        </div>
    )
}
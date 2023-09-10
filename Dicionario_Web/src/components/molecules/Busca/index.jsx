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
import PalavraNaoEncontrada from '../PalavraNaoEncontrada'

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

    const handleSearchChange = (event) => {
        setPegaPalavra(event.target.value)
    }

    const handleSearchClick = () => {
        axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${pegaPalavra}`)
        .then((response) => {
            setResultado(response.data)
            handleRequestProcessing(response.data)
            setErro('')
        })
        .catch((error) => {
            setResultado("não localizado")
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
        
        <InputBusca>
        
        <Buscador
            type="text"
            id="search"
            name="search"
            placeholder="Search for any word…"
            value={pegaPalavra}
            onChange={handleSearchChange}
        />
        <BotaoBusca onClick={handleSearchClick}>
            <img src={iconeBusca} className="fa fa-search" />
        </BotaoBusca>
        
        </InputBusca>

        {erro !== '' ? 
        
        <>
            <br />
            <br />
            <br />
            <PalavraNaoEncontrada />
        </>
        
        : 
        
        <div>
            <h2>Definição de {pegaPalavra}:</h2>
            <pre>{palavra}</pre>
            <pre>{phonetica}</pre>
            <pre>{audio}</pre>
            <br />
            <h3>noun</h3>
            <ul>
                {sinonimos.map((sinonimo , index) => (
                    <li key={index}>{sinonimo}</li>
                ))}
            </ul>

            <br />
            <h3>exemplo sinonimos</h3>
            <ul>
                {exemploSinonimos.map((verbo , index) => (
                    <li key={index}>{verbo}</li>
                ))}
            </ul>

            <br />
            <h3>verb</h3>
            <ul>
                {verbos.map((verbo , index) => (
                    <li key={index}>{verbo}</li>
                ))}
            </ul>

            <br />
            <h4>{buscaURL}</h4>
        </div>
        
        }
        
        </div>
    )
}
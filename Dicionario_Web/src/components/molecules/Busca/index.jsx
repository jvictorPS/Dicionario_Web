import { useState } from 'react'
import iconeBusca from '../../../assets/icon-search.svg'
import axios from 'axios'
import buscarSinonimosVerbos from '../../../utils/buscarSinonimoVerbo'

export default function Busca() {

    const [pegaPalavra, setPegaPalavra] = useState('')
    const [resultado , setResultado] = useState(null)
    const [erro, setErro] = useState(null)
    
    const [palavra , setPalavra] = useState('')
    const [phonetica , setPhonetica] = useState('')
    const [audio , setAudio] = useState('')
    const [sinonimos , setSinonimos] = useState([])
    const [verbos , setVerbos] = useState([])

    const handleSearchChange = (event) => {
        setPegaPalavra(event.target.value)
    }

    const handleSearchClick = () => {
        axios
        .get(`https://api.dictionaryapi.dev/api/v2/entries/en/${pegaPalavra}`)
        .then((response) => {
            setResultado(response.data)
            handleRequestProcessing(response.data)
            setErro(null)
        })
        .catch((error) => {
            setResultado("não localizado")
            setErro('Erro ao buscar a definição da palavra')
            console.log(error)
        })
    }

    const handleRequestProcessing = (data) => {
        if (data.length > 0) {
            const primeiroObjetoRequisicao = data[0]

            setPalavra(primeiroObjetoRequisicao.word)
            setPhonetica(primeiroObjetoRequisicao.phonetic)
            setSinonimos(buscarSinonimosVerbos(primeiroObjetoRequisicao.meanings , 'noun'))
            setVerbos(buscarSinonimosVerbos(primeiroObjetoRequisicao.meanings , 'verb'))

            const filtroAudioBYSA3 = primeiroObjetoRequisicao.phonetics.find(item => item.license && item.license.name == "BY-SA 3.0")


            if (filtroAudioBYSA3) {
                setAudio(filtroAudioBYSA3.audio)
            } else if (data.length > 0) {
                setAudio(primeiroObjetoRequisicao.phonetics[0].audio)
            }

        } else {
            return
        }

    }

    return (
        <div>
        <input
            type="search"
            id="search"
            name="search"
            placeholder="Digite sua pesquisa aqui"
            value={pegaPalavra}
            onChange={handleSearchChange}
        />
        <button onClick={handleSearchClick}>
            <img src={iconeBusca} className="fa fa-search" />
        </button>
        {erro && <div>{erro}</div>}
        {resultado && (
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
            <h3>verb</h3>
            <ul>
                {verbos.map((verbo , index) => (
                    <li key={index}>{verbo}</li>
                ))}
            </ul>
        </div>
        )}
        </div>
    )
}
import { ContainerErro , Emoticon , TextoErro , TituloErro } from './style'
import emoticonErro from '../../../assets/emoticonErro.png'


export default function PalavraNaoEncontrada() {
    return (
        <ContainerErro>  
            <Emoticon src={emoticonErro} alt="emoticon triste" />
            <TituloErro>No Definitions Found</TituloErro> 
            <TextoErro>Sorry pal, we couldnt find definitions for the word you were looking for. You can try the search again at later time or head to the web instead.</TextoErro>
        </ContainerErro>
    )
}
import Dicionario from "./components/organism/Dicionario/index"
import { ThemeProvider } from "styled-components"
import Global from "./styles/global"

import light from "./styles/temas/light"
import dark from "./styles/temas/dark"
import { useState } from "react"

function App() {

  const [ tema , setTema ] = useState(light)
  const [ fonteLetra , setFonteLetra ] = useState("Inter, sans-serif")

  const mudarTema = () => {
    setTema(tema.titulo === "light" ? dark : light)
  }

  dark.fonte = fonteLetra
  light.fonte = fonteLetra

  function mudarFonte(fonte) {
    setFonteLetra(fonte)
  }

  return (
    <ThemeProvider theme={tema}>

      <Global />
      <Dicionario mudarTema={mudarTema} mudarFonte={mudarFonte}/>
      
    </ThemeProvider>

  )
}

export default App

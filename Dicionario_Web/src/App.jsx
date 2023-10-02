import Dicionario from "./components/organism/Dicionario/index"
import { ThemeProvider } from "styled-components"
import Global from "./styles/global"

import light from "./styles/temas/light"
import dark from "./styles/temas/dark"
import { useState } from "react"

function App() {

  const [ tema , setTema ] = useState(light)

  const mudarTema = () => {
    setTema(tema.titulo === 'light' ? dark : light)
    console.log(tema.iconeLua)
  }

  return (
    <ThemeProvider theme={tema}>

      <Global />
      <Dicionario mudarTema={mudarTema}/>
      
    </ThemeProvider>

  )
}

export default App

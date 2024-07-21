import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OfertaESpecial from './components/OfertaESpecial'
import NovasColecoes from './components/NovasColecoes'
import Rodape from './components/Rodape'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NovasColecoes></NovasColecoes>
      <OfertaESpecial />
      <Rodape />
    </>
  )
}

export default App



// observa o que vou te mostrar. Deu um erro monstro
// terminal bugou
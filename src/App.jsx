import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OfertaESpecial from './components/OfertaESpecial'
import NovasColecoes from './components/NovasColecoes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NovasColecoes></NovasColecoes>
      <OfertaESpecial />
    </>
  )
}

export default App

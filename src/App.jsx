import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OfertaESpecial from './components/OfertaESpecial'
import NovasColecoes from './components/NovasColecoes'
import Rodape from './components/Rodape'
import Tech3 from './TECH3'

function App() {

  return (
    <>
      <Tech3 />
      <NovasColecoes></NovasColecoes>
      <OfertaESpecial />
      <Rodape />
    </>
  )
}

export default App



import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import OfertaESpecial from './components/OfertaESpecial'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <OfertaESpecial />
    </>
  )
}

export default App

import './App.css'
import OfertaESpecial from './components/OfertaESpecial'
import NovasColecoes from './components/NovasColecoes'
import Rodape from './components/Rodape'
import ProductListing from './components/ProductListing'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header/>
      <NovasColecoes></NovasColecoes>
      <ProductListing tamanho={8}/>
      <OfertaESpecial />
      <Rodape />
    </>
  )
}

export default App



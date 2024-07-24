import './App.css'
import OfertaESpecial from './components/OfertaESpecial'
import NovasColecoes from './components/NovasColecoes'
import Rodape from './components/Rodape'  
import Carrossel from './components/Carousel'
import ProductListing from './components/ProductListing'
import Header from './components/Header'

export default function App() {

  return (
    <>
      <Header />
      <Carrossel />
      <NovasColecoes/>
      <ProductListing tamanho={8} />
      <OfertaESpecial />
      <Rodape />
    </>
  )
}

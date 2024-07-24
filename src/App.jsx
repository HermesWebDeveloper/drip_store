import './App.css'
import OfertaESpecial from './components/OfertaESpecial'
import NovasColecoes from './components/NovasColecoes'
import Rodape from './components/Rodape'
import Tech3 from './TECH3'
import Carrossel from './components/Carousel'
import ProductListing from './components/ProductListing'

export default function App() {

  return (
    <>
      <Carrossel />
      <Tech3 />
      <NovasColecoes/>
      <ProductListing tamanho={8} />
      <OfertaESpecial />
      <Rodape />
    </>
  )
}

import { useEffect } from "react";
import { useState } from "react"
import produtos from './ProductListingData.json'
import './ProductListing.css'

function ProductListing () {

    let [listaExibicao, setListaExibicao] = useState([]);

    const exibirProduto = ({desconto, imagem, tipo, nome, preco_normal, preco_descontado}) => {

        return (
            <>
                <div className="div-products-item">
                    <div className="div-products-item1">
                        <p className="products-p-off">{desconto}</p>
                        <div className="div-products-img-div">
                            <img className="products-img" src={imagem}></img>
                        </div>
                    </div>
                    <div className="div-products-item2">
                        <p className="products-p1">{tipo}</p>
                        <p className="products-p2">{nome}</p>
                        <div className="products-price">
                            <p className="products-p3">$ {preco_normal}</p><p className="products-p4">$ {preco_descontado}</p>
                        </div>
                    </div>
                </div>
            </>
        )
    }
    
    useEffect(() => {
        exibirProdutos();
    }, [produtos]);

    const exibirProdutos = () => {
        const novaListaExibicao = produtos.map(produto => exibirProduto(produto));
        setListaExibicao(novaListaExibicao);
    };

    return (
        <>
            <div className="div-products">
                <div className="div-products-title">
                    <h2 className="products-h2">Produtos em Alta</h2>
                    <h3 className="products-h3">Ver todos</h3>
                </div>
                <div className="div-products-content">
                    {listaExibicao}
                </div>
            </div>
        </>
    )
}

export default ProductListing
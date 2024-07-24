import { useEffect } from "react";
import { useState } from "react"
import produtos from './ProductListingData.json'
import './ProductListing.css'
import ProductCard from "./ProductCard";

function ProductListing({ tamanho }) {

    let [listaExibicao, setListaExibicao] = useState([]);

    useEffect(() => {
        exibirProdutos();
    }, [produtos]);

    const exibirProdutos = () => {
        let novaListaExibicao = [];
        for (let i = 0; i < produtos.length; i++) {
            if (tamanho) {
                if (i < tamanho) {
                    novaListaExibicao.push(ProductCard(produtos[i]));
                }
            } else {
                novaListaExibicao.push(ProductCard(produtos[i]));
            }
        };
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
};

export default ProductListing
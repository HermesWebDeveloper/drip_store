import { useEffect } from "react";
import { useState } from "react"

function Tech3 () {

    let [listaExibicao, setListaExibicao] = useState([]);

    let produtos = [
        {
            desconto: "30% OFF",
            imagem: "src/assets/tenis1.jpg",
            tipo: "Tênis",
            nome: "K-Swiss V8 - Masculino",
            preco_normal: 200,
            preco_descontado: 100,
        }
    ];

    const exibirProduto = ({desconto, imagem, tipo, nome, preco_normal, preco_descontado}) => {

        return (
            <>
                <div className="div-products-line-item">
                    <div className="div-products-line-item1">
                        <p className="products-p-off">{desconto}</p>
                        <div className="div-products-img-div">
                            <img className="products-img" src={imagem}></img>
                        </div>
                    </div>
                    <div className="div-products-line-item2">
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
                <div className="div-products-line">
                    {listaExibicao}
                </div>
                <div className="div-products-line">
                    <div className="div-products-line-item">
                        <div className="div-products-line-item1">
                            <p className="products-p-off">30% OFF</p>
                            <div className="div-products-img-div">
                                <img className="products-img" src="src/assets/tenis1.jpg"></img>
                            </div>
                        </div>
                        <div className="div-products-line-item2">
                            <p className="products-p1">Tênis</p>
                            <p className="products-p2">K-Swiss V8 - Masculino</p>
                            <div className="products-price">
                                <p className="products-p3">$ 200</p><p className="products-p4">$ 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="div-products-line-item">
                        <div className="div-products-line-item1">
                            <p className="products-p-off">30% OFF</p>
                            <div className="div-products-img-div">
                                <img className="products-img" src="src/assets/tenis1.jpg"></img>
                            </div>
                        </div>
                        <div className="div-products-line-item2">
                            <p className="products-p1">Tênis</p>
                            <p className="products-p2">K-Swiss V8 - Masculino</p>
                            <div className="products-price">
                                <p className="products-p3">$ 200</p><p className="products-p4">$ 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="div-products-line-item">
                        <div className="div-products-line-item1">
                            {/* <!-- <p className="products-p-off">30% OFF</p> --> */}
                            <div className="div-products-img-div">
                                <img className="products-img" src="src/assets/tenis1.jpg"></img>
                            </div>
                        </div>
                        <div className="div-products-line-item2">
                            <p className="products-p1">Tênis</p>
                            <p className="products-p2">K-Swiss V8 - Masculino</p>
                            <div className="products-price">
                                <p className="products-p3">$ 200</p><p className="products-p4">$ 100</p>
                            </div>
                        </div>
                    </div>
                    <div className="div-products-line-item">
                        <div className="div-products-line-item1">
                            {/* <!-- <p className="products-p-off">30% OFF</p> --> */}
                            <div className="div-products-img-div">
                                <img className="products-img" src="src/assets/tenis1.jpg"></img>
                            </div>
                        </div>
                        <div className="div-products-line-item2">
                            <p className="products-p1">Tênis</p>
                            <p className="products-p2">K-Swiss V8 - Masculino</p>
                            <div className="products-price">
                                <p className="products-p3">$ 200</p><p className="products-p4">$ 100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Tech3
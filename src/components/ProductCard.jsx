function ProductCard ({desconto, imagem, tipo, nome, preco_normal, preco_descontado}) {

    return (
        <>
            <div className="div-products-item">
                <div className="div-products-item1">
                    {desconto  &&
                        <p className="products-p-off">{desconto}% OFF</p>
                    }   
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

export default ProductCard
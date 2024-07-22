import "./NovasColecoes.css";
import nomevari1 from "../assets/CamisaSupreme.png"
import nomevari2 from "../assets/TenisAdidas.png"
import nomevari3 from "../assets/FoneBass.png"
<link rel="stylesheet" href="" />




export default function NovasColecoes() {

    return (
        <div>
            <p className="id"><b>Coleções em destaque</b></p>
            <section className="colecoes-destaque">
                <div className="card-produto">
                        <div className="fundo-bg">
                        <div className="rotulo">
                            <h2>Novo drop </h2>
                            <h2>Supreme</h2>
                            <button><b className="button-comprar">Comprar</b></button></div>
                            <b className="button-desconto">30% OFF</b>
                            <div className="imagem-produtos">
                                <img src={nomevari1} alt=""></img>
                            </div>
                    </div>
                </div>
                <div className="card-produto">
                        <div className="fundo-bg">
                        <div className="rotulo">
                            <h2>Novo drop </h2>
                            <h2>Coleção</h2>
                            <button><b className="button-comprar">Comprar</b></button></div>
                            <b className="button-desconto">30% OFF</b>
                            <div className="imagem-produtos">
                                <img src={nomevari2} alt=""></img>
                            </div>
                    </div>
                </div>
                <div className="card-produto">
                        <div className="fundo-bg">
                        <div className="rotulo">
                            <h2>Novo </h2>
                            <h2>Beats Bass</h2>
                            <button><b className="button-comprar">Comprar</b></button></div>
                            <b className="button-desconto">30% OFF</b>
                            <div className="imagem-produtos">
                                <img src={nomevari3} alt=""></img>
                            </div>
                    </div>
                </div>

            </section>
        </div>
    )
}
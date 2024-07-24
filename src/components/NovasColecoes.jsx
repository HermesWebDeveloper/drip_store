import "./NovasColecoes.css";
import nomevari1 from "../assets/CamisaSupreme.png"

import nomevari2 from "../assets/TenisAdids.png" 
import nomevari3 from "../assets/FoneBass.png" 

import var4 from "../assets/help-20px.svg"
import var5 from "../assets/help-20px.svg"
import var6 from "../assets/help-20px.svg"
import var7 from "../assets/help-20px.svg"

export default function NovasColecoes() {

    return (
        <div>
            <div className=""></div>
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
                    <div className="rotulo">
                        <h2>Novo drop </h2>
                        <h2>Coleção</h2>
                        <button><b className="button-comprar">Comprar</b></button></div>
                    <b className="button-desconto">30% OFF</b>
                    <div className="imagem-produtos">
                        <img src={nomevari2} alt=""></img>
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
            <section className="colecoes-dq-2"> <p className="titulo"> <strong className="nome-chama">Coleções em destaque</strong>
                <p className="id-2"><b></b>
                <img className="icons" src={var7} alt="" />
                <p className="rotulo-p">camisetas</p>
                <img className="icons" src={var4} alt="" />
                <p className="rotulo-p">Calças</p>
                <img className="icons" src={var4} alt="" />
                <p className="rotulo-p">Bonés</p>
                <img className="icons" src={var6} alt="" />
                <p className="rotulo-p">Headphones</p>
                <img className="icons" src={var5} alt="" />
                <p className="rotulo-p">Tênis</p></p></p>

            </section>
        </div>
    )
}
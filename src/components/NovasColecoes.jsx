import "./NovasColecoes.css";
import nomevari1 from "../assets/CamisaSupreme.png"
import nomevari2 from "../assets/TenisAdids.png" 
import nomevari3 from "../assets/FoneBass.png" 


export default function NovasColecoes() {

    return (
        <div><p>Novas Coleções</p>
            <section className="colecoes-destaque">
                <div className="product-card">
                    <div className="supreme">
                        <img src={nomevari1} alt=""></img>
                            <h2>Novo drop Supreme</h2>
                            <button>Comprar</button>
                    </div>
                </div>

                <div className="product-card">
                    <img src={nomevari2} alt="" />
                        <h2>Nova coleção Adidas</h2>
                        <button>Comprar</button>

                </div>

                <div className="product-card">
                    <img src= {nomevari3} alt="" />
                        <h2>Novo Beats Bass</h2>
                        <button>Comprar</button>

                </div>
            </section></div>
    )
}
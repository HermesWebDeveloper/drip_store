import "./Header.css"
import logo from "../assets/lupa.png"
import lupa from "../assets/logo-digital.png"
import carrinho  from "../assets/carrinho.png"

export default function Header () {
    return (
        <div className="header-conteiner">
            <div className="nav-header">
                <a className="digital-store-header" href="#"><img className="logo-digital" src={logo} alt="" /> Digital Store</a>
                <input className="input-header" type="text" name="" id="" placeholder="Pesquisar produtos" />
                    <img className="search-icon" src={lupa} alt="" />
                        <a className="cadastrar" href="">Cadastre-se</a>
                        <div className="navigation-header">
                            <ol className="ol-header">
                                <a href="">
                                    <li>Home</li>
                                </a>
                                <a href="">
                                    <li>Produtos</li>
                                </a>
                                <a href="">
                                    <li>Categorias</li>
                                </a>
                                <a href="">
                                    <li>Meus Pedidos</li>
                                </a>

                            </ol>
                        </div>
                        <div className="style-button">
                            <button className="entrar-header">Entrar</button>
                            <img className="carrinho" src={carrinho} alt="carrinho-de-compras" />
                        </div>
                    </div>
        
            </div>
            )
}

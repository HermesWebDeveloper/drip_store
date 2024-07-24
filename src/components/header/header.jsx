import {logo} from "./src/assets/header-imgs/logo-digital.png"
import { carrinho } from "./src/assets/header-imgs/carrinho-inteligente"

export default function Header() {
    return (
        <div className="header-conteiner">
            <div className="nav-header">
                <a className="digital-store-header" href="#"><img className="logo-digital" src={logo} alt=""> Digital Store</a>
                <input className="input-header" type="text" name="" id="" placeholder="Pesquisar produto...">
                    <img className="search-icon" src="images/img-header/lupa.png" alt="">
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
                            <img className="carrinho" src={carrinho} alt="">
                        </div>
                    </div>

            </div>
            )
}
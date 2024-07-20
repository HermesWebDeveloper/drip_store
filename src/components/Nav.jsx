import "./Nav.css";

export default function Nav() {
    return (



        <header className="header-conteiner">
            <nav className="nav-header">
                <a className="digital-store-header" href="#">
                    <img className="logo-digital" src="/images/img-header/logo-digital.png" alt="" /> Digital Store</a>
                <input className="input-header" type="text" name="" id="" placeholder="Pesquisar produto..." />
                <img className="search-icon" src="images/img-header/lupa.png" alt="" />
                <a className="cadastrar" href="">Cadastre-se</a>

                <div className="navigation-header">
                    <ol className="ol-header">
                        <a className="" href=""><li>Home</li></a>
                        <a href=""><li>Produtos</li></a>
                        <a href=""><li>Categorias</li></a>
                        <a href=""><li>Meus Pedidos</li></a>

                    </ol>
                </div>
                <div className="style-button">
                    <button className="entrar-header">Entrar</button>
                    <img className="carrinho" src="images/img-header/carrinho-inteligente.png" alt="" />
                </div>
            </nav>

        </header>





    );
}
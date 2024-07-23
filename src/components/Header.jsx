import './Header.css'

function Header() {
    
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
            <link href="static/estilo.css" type="text/css" rel="stylesheet"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"></link>
            <header className="mx-99px d-flex flex-column mt-34px">
                <div className="d-flex flex-row align-items-center">
                    <div className="d-flex flex-row align-items-center gap-34px">
                        <div className="d-flex flex-row align-items-center">
                            <img src="images/logo_digital_store.svg" alt="Ícone Digital Store"></img>
                            <h1 className="text-digital-store">Digital Store</h1>
                        </div>
                        <div>
                            <form className="d-flex">
                                <div className="form-control me-2 width-559px justify-content-between">
                                    <input type="search" placeholder="Search" className="reset-style width-535px">
                                    </input>
                                </div>
                            </form>
                        </div>
                        <div>
                            <a href="" className="link-cadastre-se custom-underline">Cadastre-se</a>
                        </div>
                        <div>
                            <button className="btn-1">Entrar</button>
                        </div>
                    </div>
                    <div className="ml-70px">
                        <a href="">
                            <img src="images/img_carrinho.svg" alt="Ícone Carrinho"></img>
                        </a>
                    </div>
                </div>
                <div>
                    <nav>
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <a className="nav-link active" href="">Home</a>
                            </li>
                            <li>
                                <a className="nav-link" href="">Produtos</a>
                            </li>
                            <li>
                                <a className="nav-link" href="">Categorias</a>
                            </li>
                            <li>
                                <a className="nav-link" href="">Meus Pedidos</a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header
import "./OfertaESpecial.css";
import tenisEspecial from "../assets/tenisEspecial.png";

export default function OfertaESpecial() {
    return (

        <div
            className="oferta-especial flex flex-col md:flex-row items-center md:items-start md:justify-between p-4 md:p-8 lg:p-12 bg-white shadow-lg rounded-lg">
            <div className="img-ofep w-full md:w-1/2 lg:w-1/3">
                <img src={tenisEspecial} alt="Imagem do Produto" className="w-full h-auto" />
            </div>

            <div className="part2 text-ofep mt-6 md:mt-0 md:ml-8 lg:ml-12 w-full md:w-1/2 lg:w-2/3 text-center md:text-left">
                <h2 className="ofep-h2 ">Oferta Especial</h2>
                <h1 className="ofep-h1 text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-2">Air Jordan edição de
                    colecionador</h1>
                <div className="part3">
                    <p className="ofep-p text-gray-600 text-base md:text-lg lg:text-xl mt-4">Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
                <div className="container text-left">
                    <a href="#" className="ofep-bt inline-block mt-6 bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">Ver Oferta</a>
                </div>
            </div>
        </div>


    );
}
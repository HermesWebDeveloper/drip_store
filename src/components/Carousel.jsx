import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../components/Carousel.css';
import sneakers from '../assets/white-Sneakers.svg';
import bolinhas from '../assets/ornament.svg';

export default function Carrossel() {
    return (
        <Carousel
            showThumbs={false} autoPlay={true} infiniteLoop={true}
            showStatus={false} interval={3000}
        >
            <div className="slide">
                <div className="div-maior">
                    <div className="info">
                        <div className="yellow-text">Melhores ofertas personalizadas</div>
                        <h1>Queima de estoque Nike<span role="img" aria-label="fire">🔥</span></h1>
                        <p>
                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </p>
                        <button type="button" className="btn">Ver Ofertas</button>
                    </div>
                    <div className="image-sneakers">
                        <img src={sneakers} alt="Nike Sneakers" />
                    </div>
                    <img src={bolinhas} alt="Pontinhos" className="pontinhos" />
                </div>
            </div>
            <div className="slide">
                <div className="div-maior">
                    <div className="info">
                        <div className="yellow-text">Melhores ofertas personalizadas</div>
                        <h1>Queima de estoque Nike<span role="img" aria-label="fire">🔥</span></h1>
                        <p>
                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </p>
                        <button type="button" className="btn">Ver Ofertas</button>
                    </div>
                    <div className="image-sneakers">
                        <img src={sneakers} alt="Nike Sneakers" />
                    </div>
                    <img src={bolinhas} alt="Pontinhos" className="pontinhos" />
                </div>
            </div>
            <div className="slide">
                <div className="div-maior">
                    <div className="info">
                        <div className="yellow-text">Melhores ofertas personalizadas</div>
                        <h1>Queima de estoque Nike<span role="img" aria-label="fire">🔥</span></h1>
                        <p>
                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </p>
                        <button type="button" className="btn">Ver Ofertas</button>
                    </div>
                    <div className="image-sneakers">
                        <img src={sneakers} alt="Nike Sneakers" />
                    </div>
                    <img src={bolinhas} alt="Pontinhos" className="pontinhos" />
                </div>
            </div>
            <div className="slide">
                <div className="div-maior">
                    <div className="info">
                        <div className="yellow-text">Melhores ofertas personalizadas</div>
                        <h1>Queima de estoque Nike<span role="img" aria-label="fire">🔥</span></h1>
                        <p>
                            Consequat culpa exercitation mollit nisi excepteur do do tempor laboris eiusmod irure consectetur.
                        </p>
                        <button type="button" className="btn">Ver Ofertas</button>
                    </div>
                    <div className="image-sneakers">
                        <img src={sneakers} alt="Nike Sneakers" />
                    </div>
                    <img src={bolinhas} alt="Pontinhos" className="pontinhos" />
                </div>
            </div>
        </Carousel>
    );
}
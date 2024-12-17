import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1200,
    speed: 1000,
  };

  return (
    <>
      <div className="carousel-home">
        <Slider {...settings}>
          <div className="carousel-contante">
            <img src="carou2.webp" alt="img1" />
            <div className="carousel-contante1">
              <h1 className="title-caro">
                Boutique Mirabelle Style : Vente et Location de Tenues de
                Mariage
              </h1>
              <div className="text_container">
                <div className="text">
                  <p>Choisissez votre mode d'achat:</p>
                  <select>
                    <option>Achat direct</option>
                    <option>Sur commande</option>
                    <option>Location</option>
                    <option>Par Facilté</option>
                  </select>
                </div>
                <a href="#">
                  <span>Commencer</span>
                </a>
              </div>
            </div>
          </div>
          <div className="carousel-contante">
            <img src="carou-1.webp" alt="img1" />
            <div className="carousel-contante1">
              <h1 className="title-caro">
                Boutique Mirabelle Style : Vente et Location de Tenues de
                Mariage
              </h1>
              <div className="text_container">
                <div className="text">
                  <p>Choisissez votre mode d'achat:</p>
                  <select>
                    <option>Achat direct</option>
                    <option>Sur commande</option>
                    <option>Location</option>
                    <option>Par Facilté</option>
                  </select>
                </div>
                <a href="#">
                  <span>Commencer</span>
                </a>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SimpleSlider;

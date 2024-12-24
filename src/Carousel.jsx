import React from "react";
import Slider from "react-slick";

function SimpleSlider(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1200,
    autoplay: true,
  };

  return (
    <>
      <div className="carousel-home">
        <Slider {...settings}>
          {props.imgList.map((item) => (
            <div className="carousel-contante">
              <img src={item} alt="img1" />

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
          ))}
        </Slider>
      </div>
    </>
  );
}

export default SimpleSlider;

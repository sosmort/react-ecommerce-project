import React from "react";
import Slider from "react-slick";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const image1 = {
    backgroundImage: "url('carou-1.webp')",
  };

  const image2 = {
    backgroundImage: "url('carou2.webp')",
  };

  return (
    <>
      <div className="carousel-home">
        <Slider {...settings}>
          <div className="carousel-contante image1">
            <div
              className="carousel-contante1"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1 className="title-caro">Find product For Your Shop</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <button className="btn-caro">Shop NOW!</button>
            </div>
          </div>
          <div className="carousel-contante image2">
            <div
              className="carousel-contante1"
              data-aos="fade-up"
              data-aos-duration="1500"
            >
              <h1 className="title-caro">Find product For Your Shop</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
              <button className="btn-caro">Shop NOW!</button>
            </div>
          </div>
        </Slider>
      </div>
    </>
  );
}

export default SimpleSlider;

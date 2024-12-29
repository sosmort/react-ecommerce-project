import { height } from "@fortawesome/free-solid-svg-icons/fa0";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Category(props) {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 1000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <>
      <div className="category_container">
        <div className="category_title">
          <h1>Catégories</h1>
          <div className="category_underline">
            <span></span>
            <img src="title_logo.svg" alt="" />
            <span></span>
          </div>
        </div>
        <Slider {...settings}>
          {props.products.map((item) => (
            <div className="catimg">
              <img src={item.image} alt="" />
              <h1>{item.name}</h1>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
}
export default Category;

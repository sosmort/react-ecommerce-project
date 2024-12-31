import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import Header from "./Component/Header";
import Carousel from "./Component/Carousel";
import Category from "./Component/Category";
import PubVideo from "./Component/PubVideo";
import AllProducts from "./Component/AllProducts";
import Banner from "./Component/Banner";
import BackBanner from "./Component/BannerBackground";
import Footer from "./Component/Footer";
const products = [
  { id: 1, name: "blouza", price: "2,000 DZD", image: "cat1.jpeg" },
  { id: 2, name: "BONK DE BAIN", price: "350 DZD", image: "cat2.jpeg" },
  { id: 3, name: "Caftan", price: "23,000 DZD", image: "cat3.jpeg" },
  {
    id: 4,
    name: "ENSEMBLE HAMMAM TOUNSI",
    price: "22,500 DZD",
    image: "cat4.jpeg",
  },
  {
    id: 5,
    name: "KARAKOU ENFANTS 3ps",
    price: "32,000 DZD",
    image: "cat5.jpeg",
  },
  { id: 6, name: "POINT DE BAIN ", price: "62,000 DZD", image: "cat6.jpeg" },
  { id: 7, name: "SABO HAMMAM", price: "850 DZD", image: "cat7.jpeg" },
  { id: 8, name: "Sac", price: "2,450 DZD", image: "cat8.jpeg" },
  { id: 9, name: "Tej", price: "2,200 DZD", image: "cat9.jpeg" },
];

function App() {
  return (
    <>
      <Header
        navlist={["Accueil", "Magasin", "À propos", "Contact", "Commandes"]}
        onChangePage={(page: any) => {
          console.log(page);
        }}
      ></Header>
      <Carousel imgList={[`carou-2.webp`, `carou-1.webp`]}></Carousel>
      <Category
        products={products}
        // imgCatList={Array.from(
        //   { length: 9 },
        //   (_, index) => `cat${index + 1}.jpeg`
        // )}
      ></Category>
      <PubVideo></PubVideo>
      <AllProducts products={products}></AllProducts>
      <Banner
        bannerListe={[`banner1.svg`, `banner2.svg`, `banner3.svg`]}
      ></Banner>
      <BackBanner></BackBanner>
      <Footer></Footer>
    </>
  );
}

export default App;

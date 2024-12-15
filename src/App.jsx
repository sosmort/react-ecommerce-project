import { useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "./App.css";
import Header from "./Header";
import Carousel from "./Carousel";

function App() {
  return (
    <>
      <Header
        navlist={["Accueil", "Magasin", "À propos", "Contact", "Commandes"]}
        onChangePage={(page) => {
          console.log(page);
        }}
      ></Header>
      <Carousel></Carousel>

      {/* {count > 5 && <p>rak fog 5</p>}

      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        count
      </button>
      <p>this is {count}</p> */}
    </>
  );
}

export default App;

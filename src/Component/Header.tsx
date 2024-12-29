import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

export default function Header(props) {
  const [isOpen, setOpen] = useState(false);
  const ToggleSide = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <header className="navbar">
        {/* <span id="showMenu">
          <i className="fa fa-bars fa_bars" id="nav-toggle"></i>
        </span> */}

        {isOpen ? (
          <div
            className={`mobile_navbar ${isOpen ? "active" : ""}`}
            id="myTopnav"
          >
            <div className="section_mobile1">
              <div className="section_mobile">
                <ul>
                  <li>
                    <button className="active">Accueil</button>{" "}
                  </li>
                  <li>
                    <button>Magasin</button>{" "}
                  </li>
                  <li>
                    <button>À propos</button>{" "}
                  </li>
                  <li>
                    <button>Contact</button>{" "}
                  </li>
                  <li>
                    <button>Commandes</button>{" "}
                  </li>
                  <li>
                    <a href="#" className="connect_button_mobile">
                      Se Connecter
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        ) : (
          <span id="showMenu" onClick={ToggleSide}>
            <i className="fa fa-bars fa_bars" id="nav-toggle"></i>
          </span>
        )}
        {isOpen && (
          <div
            className="close_btn_navbar_mobile"
            id="close_btnnavbar"
            style={{ lineHeight: "0" }}
          >
            <i className="fa fa-times" onClick={ToggleSide}></i>
          </div>
        )}

        <div className="logo_nav">
          <div className="content-navbar">
            {props.navlist.map((item) => (
              <a href="#" onClick={() => props.onChangePage(item)}>
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="logo-navbar">
          {/* <img src="vite.svg" style={{ height: "24px" }} /> */}
          <h3>Mirabelle Style </h3>
        </div>
        <div className="icon-navbar">
          <div className="icon__navbar">
            <div className="icon_wrapper">
              <img src="cart_icon.svg" alt="" />
              <span className="svg-overlay-text">0</span>
            </div>
            <span className="panier">Panier</span>
            {/* <span>|</span> */}
            <span>0</span>

            {/* <i className="fa-solid fa-magnifying-glass searchbtn"></i>
            <i className="fa-regular fa-user" onclick="toggleMenu()"></i> */}
          </div>
          <div className="user_connect">
            <div className="language">
              <button className="active">Fr</button>
              <button>En</button>
            </div>
            <div className="connect_button">Se Connecter</div>
          </div>
        </div>
      </header>
      {/* <ul>
        {props.navlist.map((item) => (
          <li>
            <a href="#" onClick={() => props.onChangePage(item)}>
              {item}
            </a>
          </li>
        ))}
      </ul> */}
    </>
  );
}

import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { useState } from "react";

export default function Header(props: any) {
  const [isOpen, setOpen] = useState(false);
  const ToggleSide = () => {
    setOpen(!isOpen);
  };
  return (
    <>
      <div className="top_header">
        <ul>
          <li>
            <img src="mail.svg" alt="mail-icon" />
            <span>mirabellestyle@gmail.com</span>
          </li>
          <li>
            <img src="phone.svg" alt="phone-icon" />
            <span>0770172171</span>
          </li>
        </ul>
        <div className="social_media_header">
          <a href="#">
            <img src="/facebook_icon.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/instagram_icon.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/tiktok_icon.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/snapchat_icon.svg" alt="facebook" />
          </a>
          <a href="#">
            <img src="/youtube_icon.svg" alt="facebook" />
          </a>
        </div>
      </div>
      <header className="navbar">
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
            {props.navlist.map((item: any) => (
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
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.93188 21.7788C7.31743 21.7788 6.00873 23.0876 6.00873 24.702C6.00873 26.3164 7.31749 27.6251 8.93188 27.6251C10.5463 27.6251 11.855 26.3163 11.855 24.702C11.8551 23.0876 10.5463 21.7788 8.93188 21.7788ZM8.93188 26.326C8.03498 26.326 7.30792 25.5989 7.30792 24.702C7.30792 23.8051 8.03498 23.0781 8.93188 23.0781C9.82878 23.0781 10.5558 23.8051 10.5558 24.702C10.5559 25.5989 9.82878 26.326 8.93188 26.326Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.25"
                ></path>
                <path
                  d="M21.2742 21.7788C19.6598 21.7788 18.3511 23.0876 18.3511 24.702C18.3511 26.3164 19.6598 27.6251 21.2742 27.6251C22.8886 27.6251 24.1974 26.3163 24.1974 24.702C24.1974 23.0876 22.8887 21.7788 21.2742 21.7788ZM21.2742 26.326C20.3773 26.326 19.6503 25.5989 19.6503 24.702C19.6503 23.8051 20.3773 23.0781 21.2742 23.0781C22.1711 23.0781 22.8982 23.8051 22.8982 24.702C22.8982 25.5989 22.1711 26.326 21.2742 26.326Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.25"
                ></path>
                <path
                  d="M27.8676 4.72709C27.7323 4.57932 27.5472 4.48681 27.3479 4.46723L6.20364 4.17491L5.61901 2.38851C5.20715 1.19432 4.08887 0.388122 2.82573 0.374756H0.649596C0.290823 0.374756 0 0.665579 0 1.02435C0 1.38312 0.290823 1.67395 0.649596 1.67395H2.82573C3.53202 1.68955 4.15395 2.14307 4.38479 2.81075L8.50971 15.2505L8.18494 15.9975C7.82269 16.9316 7.93148 17.983 8.47726 18.8232C9.01781 19.6485 9.92721 20.1577 10.9133 20.1874H23.5479C23.9067 20.1874 24.1975 19.8966 24.1975 19.5378C24.1975 19.179 23.9067 18.8882 23.5479 18.8882H10.9132C10.3564 18.8743 9.84378 18.5813 9.54904 18.1087C9.25759 17.6418 9.19772 17.0666 9.38665 16.5496L9.64652 15.965L23.3205 14.5359C24.8225 14.3704 26.058 13.278 26.4061 11.8076L27.9651 5.27914C28.0354 5.09115 27.9981 4.87971 27.8676 4.72709ZM25.1393 11.5153C24.9285 12.4619 24.1248 13.1601 23.1581 13.2367L9.64652 14.6333L6.62589 5.4741L26.5359 5.76642L25.1393 11.5153Z"
                  fill="currentColor"
                  stroke="currentColor"
                  stroke-width="0.25"
                ></path>
              </svg>
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
      <div className="social_media_fix">
        <a href="#">
          <img src="/facebook_icon.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="/instagram_icon.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="/tiktok_icon.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="/snapchat_icon.svg" alt="facebook" />
        </a>
        <a href="#">
          <img src="/youtube_icon.svg" alt="facebook" />
        </a>
        <a className="whatsapp" href="#">
          <img src="/whatsapp.svg" alt="facebook" />
        </a>
      </div>
    </>
  );
}

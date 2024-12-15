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
                  <li>HOME</li>
                  <li>ABOUT</li>
                  <li>SERVICES</li>
                  <li>CONTACT</li>
                </ul>
                <div className="user-info user_mobile_navbar">
                  <a href="">
                    <i className="fa-solid fa-arrow-right-to-bracket"></i> Login
                  </a>

                  <a href="">
                    <i className="fa-regular fa-user user_mobileinfo"></i> Sign
                    In
                  </a>

                  <a href="">
                    <i className="fa-regular fa-heart"></i> Wishlist
                  </a>
                </div>

                <div className="contant_dinar dinarfor_mobile">
                  <div>
                    <span>DZA</span> DINAR
                  </div>
                </div>
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
          <div className="search_box">
            <div className="asq_search_box">What are you Loking For</div>
            <input
              className="placeholder_search"
              type="text"
              placeholder="search Product....."
            />
            <div>
              <i className="fa-solid fa-xmark closesearch search_close_icon"></i>
              <i className="fa-solid fa-magnifying-glass search_box_icon"></i>
            </div>
          </div>
          <div className="icon__navbar">
            <i className="fa-solid fa-cart-shopping " onclick="toggleMenua()">
              <span style={{ fontSize: "14px", fontWeight: "400" }}>
                Panier
              </span>
              <span>|</span>
              <span>0</span>
            </i>
            {/* <i className="fa-solid fa-magnifying-glass searchbtn"></i>
            <i className="fa-regular fa-user" onclick="toggleMenu()"></i> */}
          </div>
        </div>

        <div className="sub-menu-wrap" id="subMenu">
          <div className="sub-menu">
            <div className="user-menu">
              <div className="user-info">
                <a href="">
                  <i className="fa-solid fa-arrow-right-to-bracket"></i>Login
                </a>

                <a href="">
                  {" "}
                  <i className="fa-regular fa-user"></i>
                  SignIn
                </a>

                <a href="">
                  <i className="fa-regular fa-heart"></i>Wishlist
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="sub-menu-wrapa" id="subMenua">
          <div className="sub-menua">
            <div className="user-menua">
              <div className="user-infoa">
                <i className="fa-solid fa-cart-shopping  in-cart-icon"></i>
                <div className="p_user_info">No Product in The Cart</div>
              </div>
            </div>
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

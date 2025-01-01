import React, { useState } from "react";
function footer() {
  // State to track the visibility of each UL
  const [isOffersOpen, setIsOffersOpen] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const toggleOffers = () => {
    setIsOffersOpen(!isOffersOpen);
    setIsContactOpen(false);
  };

  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    setIsOffersOpen(false);
  };
  return (
    <>
      <footer className="footer_container">
        <div className="footer_component">
          <a href="#">
            <img className="logo_footer" src="mirabelle.png" alt="logo" />
          </a>
          <h3>Mirabelle style</h3>
          <div className="social_media_footer">
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
        <div className="footer_component">
          <h2 onClick={toggleOffers}>Offres</h2>
          <ul className={isOffersOpen ? "offer-open" : "offer-closed"}>
            <li>
              <span>
                <a href="#">Achat direct</a>
              </span>
            </li>
            <li>
              <span>
                <a href="#">Sur commande</a>
              </span>
            </li>
            <li>
              <span>
                <a href="#">Location</a>
              </span>
            </li>
            <li>
              <span>
                <a href="#">Par facilité</a>
              </span>
            </li>
          </ul>
        </div>
        <div className="footer_component">
          <h2 onClick={toggleContact}>Contactez-nous</h2>
          <ul className={isContactOpen ? "offer-open" : "offer-closed"}>
            <li>
              <img src="mail.svg" alt="mail" />
              <span>mirabellestyle@gmail.com</span>
            </li>
            <li>
              <img src="phone.svg" alt="phone" />
              <span>0770172171</span>
            </li>
            <li>
              <img src="location.svg" alt="location" />
              <span>Lahoual Cheref St Mostaganem, Algeria</span>
            </li>
          </ul>
        </div>
      </footer>
      <div className="bottom_footer">
        <div>
          <span>Copyright © 2023</span>
          <div className="conditions">
            <a href="#">Tous droits réservés</a>
            <a href="#">Termes et Conditions</a>
            <a href="#">Politique de confidentialité</a>
          </div>
        </div>
      </div>
    </>
  );
}
export default footer;

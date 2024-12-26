function Banner() {
  return (
    <>
      <div className="banner_background">
        <div className="empty"></div>
        <h1>Nos offres</h1>
        <p>
          Sélectionnez votre choix entre un achat direct ou sur commande,
          location ou l'achat par facilité.
        </p>
        <div className="promotion">
          <div className="first_line">
            <div className="case">
              <a href="#">
                <img src="svgviewer-png-output.png" alt="" />
                <h1>Achat direct</h1>
                <p>Choisissez la commodité de l'achat instantané.</p>
              </a>
            </div>

            <div className="case">
              <a href="#">
                <img src="svgviewer-png-output.png" alt="" />
                <h1>Sur commande</h1>
                <p>
                  Personnalisation Sur Mesure : Commandez Selon Vos Préférences.
                </p>
              </a>
            </div>
          </div>
          <div className="second_line">
            <div className="case">
              <a href="#">
                <img src="svgviewer-png-output.png" alt="" />
                <h1>Location</h1>
                <p>Élégance Temporaire : Louez la Tenue Parfaite.</p>
              </a>
            </div>

            <div className="case">
              <a href="#">
                <img src="svgviewer-png-output.png" alt="" />
                <h1>Par facilité</h1>
                <p>Simplicité Élégante : Achetez sans Souci.</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Banner;

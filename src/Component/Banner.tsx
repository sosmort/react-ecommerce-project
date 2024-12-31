function banner({ bannerListe }: { bannerListe: string[] }) {
  return (
    <>
      <div className="banner_container">
        <div className="image_container">
          <div className="column1">
            <img src={bannerListe[0]} alt="banner1" />
          </div>
          <div className="column2">
            <img src={bannerListe[1]} alt="banner2" />
            <img src={bannerListe[2]} alt="banner3" />
          </div>
        </div>
        <div className="banner_text">
          <h1>À propos</h1>
          <h6>Notre Histoire d'Élégance et de Service Exceptionnel</h6>
          <p>
            Bienvenue chez Mirabelle Style, votre destination ultime pour
            l'élégance et la tradition vestimentaire en Algérie. Nous sommes
            fiers de vous présenter une collection exquise de tenues
            traditionnelles, soigneusement sélectionnées pour refléter la
            richesse de notre patrimoine culturel.
          </p>
        </div>
      </div>
    </>
  );
}
export default banner;

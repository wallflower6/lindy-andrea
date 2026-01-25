import { useTranslation } from "react-i18next";

const Venue = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="venue">
      <h2>{t("venue.title")}</h2>
      <p>{t("venue.p0")} <a href="https://maps.app.goo.gl/bRYCLwpzQBUmyvdx7">Fermata Alpi Graie, in Via Giuseppe Sobrile, 1 - 10070 Forno Alpi Graie (TO)</a></p>
      <p>{t("venue.p1")}</p>

      <img
          src="https://www.fermatalpigraie.com/wp-content/uploads/2021/05/2019-08-001-2-1536x1024.jpg"
          alt="Venue image"
          className="home-image"
      />

      <div className="venue_transport">
        <h2>{t("venue.venue_transport.title")}</h2>
        <div className="venue_transport_bus venue_transport_option">
          <h3>{t("venue.venue_transport.bus.title")}</h3>
          <p>{t("venue.venue_transport.bus.main")}</p>
          <br />
          <p><a href="https://www.gtt.to.it/cms/risorse/intercomunale/oraripdf/3971.pdf">Torino - Ceres</a></p>
          <p><a href="https://faciletorino.it/FCKeditorUserFiles/company113887/orari%20linee/ESTIVI%202024%20pr/LINEA%20173TO.pdf">Ceres - Forno Alpi Graie</a></p>
        </div>

        <div className="venue_transport_air venue_transport_option">
          <h3>{t("venue.venue_transport.air.title")}</h3>
          <p>{t("venue.venue_transport.air.main")}</p>

          <div className="venue_transport_air_option">
            <h4>{t("venue.venue_transport.air.torino_airport")}</h4>
            <p>{t("venue.venue_transport.air.torino_airport_p0")}</p>
            <br />
            <p><a href="https://www.trenitalia.com/it.html">Torino Caselle - Torino Porta Susa ({t("general.train")})</a> {t("venue.venue_transport.air.caselle_susa")}</p>
            <p><a href="https://arriva.it/app/uploads/sites/4/2020/07/000268.pdf">Torino Caselle - Torino Porta Susa (Bus)</a></p>
          </div>

          <div className="venue_transport_air_option">
            <h4>{t("venue.venue_transport.air.milan_airport")}</h4>
            <p>{t("venue.venue_transport.air.milan_airport_p0")}</p>
            <br />
            <p><a href="https://www.omio.it/autobus/aeroporto-milano-malpensa-mxp/torino">Milano Malpensa - Torino Porta Susa (Bus)</a></p>
            <br />
            <p>{t("venue.venue_transport.air.milan_bus_disclaimer")}</p>
          </div>

          <br />
          
          <p>{t("venue.venue_transport.p0")}</p>
          <br />
          <p>{t("venue.venue_transport.p1")}</p>
        </div>

      </div>

      <div className="venue_accoms">
        <h2>{t("venue.venue_accoms.title")}</h2>
        <p>{t("venue.venue_accoms.p0")}</p>
        <p>{t("venue.venue_accoms.p1")}</p>
        <div className="venue_accom">
          <strong><a href="https://www.cadambra.com/">{t("venue.venue_accoms.accoms1.name")}</a></strong>
          <p>{t("venue.venue_accoms.accoms1.address")}</p>
          <p>{t("venue.venue_accoms.accoms1.desc")}</p>
        </div>
        <p>{t("venue.venue_accoms.p2")}</p>
      </div>

      <div className="venue_activities">
        <h2>{t("venue.venue_activities.title")}</h2>
        <p>{t("venue.venue_activities.p0")} <a href="https://www.fermatalpigraie.com/outdoor/">Fermata Alpi Graie (Outdoor)</a></p>
        <p>{t("venue.venue_activities.p1")}</p>
      </div>

    </div>
  );
}
 
export default Venue;
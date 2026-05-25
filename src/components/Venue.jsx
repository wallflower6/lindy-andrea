import { useTranslation } from "react-i18next";
import mxp_1 from "../assets/mxp_1.jpg"
import mxp_2 from "../assets/mxp_2.jpg"
import mxp_3 from "../assets/mxp_3.jpg"
import mxp_4 from "../assets/mxp_4.jpg"
import mxp_5 from "../assets/mxp_5.jpg"
import mxp_6 from "../assets/mxp_6.jpg"
import mxp_7 from "../assets/mxp_7.jpg"

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
            <figure className="image-figure">
              <img src={mxp_1} className="home-image" />
              <figcaption className="image-caption">
                STEP 1: Take the lift from Arrivals between Doors 4 and 6 to Floor -1, and follow the signs until you reach this
              </figcaption>
            </figure>
            <br />
            <p>{t("venue.venue_transport.air.milan_airport_p1")}</p>
            <figure className="image-figure">
              <img src={mxp_2} className="home-image" />
              <figcaption className="image-caption">
                STEP 2: Keep walking until you see this "Porta Milano"
              </figcaption>
            </figure>
            <br />
            <p>{t("venue.venue_transport.air.milan_airport_p2")}</p>
            <figure className="image-figure">
              <img src={mxp_3} className="home-image" />
              <figcaption className="image-caption">
                STEP 3: Keep going straight, and when you see this, follow the sign for 'Airport bus'"
              </figcaption>
            </figure>
            <br />
            <p>{t("venue.venue_transport.air.milan_airport_p3")}</p>
            <figure className="image-figure">
              <img src={mxp_4} className="home-image" />
              <figcaption className="image-caption">
                STEP 4: Continue following the sign for 'Airport bus'
              </figcaption>
            </figure>
            <br />
            <p>{t("venue.venue_transport.air.milan_airport_p4")}</p>
            <figure className="image-figure">
              <img src={mxp_5} className="home-image" />
              <figcaption className="image-caption">
                STEP 5: When you exit the building into this place, TURN LEFT (as the sign shows)
              </figcaption>
            </figure>
            <br />
            <p>{t("venue.venue_transport.air.milan_airport_p5")}</p>
            <figure className="image-figure">
              <img src={mxp_6} className="home-image" />
              <figcaption className="image-caption">
                STEP 6: After turning left, keep walking straight, the buses are just ahead
              </figcaption>
            </figure>
            <br />
            <p>{t("venue.venue_transport.air.milan_airport_p6")}</p>
            <figure className="image-figure">
              <img src={mxp_7} className="home-image" />
              <figcaption className="image-caption">
                STEP 7: Bus stands are here! Find the one that goes to Turin. Buy the ticket on the spot (tell the conductor or driver). You can also buy it online (see below for the Omio link)
              </figcaption>
            </figure>
            <br />
            <p><strong>{t("venue.venue_transport.air.milan_airport_p7")}</strong></p>
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
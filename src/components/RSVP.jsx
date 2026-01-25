import { useTranslation } from "react-i18next";

const RSVP = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="rsvp">
      <h2>{t("rsvp.title")}</h2>
      <p>{t("rsvp.google_form")}</p>

      <ul>
        <li>{t("rsvp.p0")}</li>
        <li>{t("rsvp.p1")}</li>
      </ul>

      <div className="rsvp-wrapper">
        <a
          href="https://forms.gle/7kAvFaERKWJAec3P9"
          className="rsvp-card"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="envelope-flap"></span>
          <span className="rsvp-text">RSVP</span>
        </a>
      </div>


      <p>{t("rsvp.ask_for_money")}:</p>
      <p>{t("rsvp.andrea_iban")}</p>
    </div>
  );
}
 
export default RSVP;
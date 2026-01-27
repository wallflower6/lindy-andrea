import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import DoubleHappiness_v1 from "../assets/DoubleHappiness_v1.png"

export default function Navbar() {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  const nextLang = currentLang === "en" ? "it" : "en";

  const switchLanguage = (e) => {
    e.preventDefault(); // prevent page jump
    i18n.changeLanguage(nextLang);
    localStorage.setItem("lang", nextLang);
  };

  return (
    <nav className="navbar">
      {/* <a href="/" target="_self" className="brand">
        <img src={DoubleHappiness_v0} alt="A+L logo" className="logo" />
        <h1>A+L</h1>
      </a> */}

      <Link to="/" className="brand">
        <img src={DoubleHappiness_v1} alt="A+L logo" className="logo" />
        <h1>A+L</h1>
      </Link>

      <div className="links">
        {/* <a href="/#/venue" target="_self">{t("nav.venue")}</a>
        <a href="/#/program" target="_self">{t("nav.program")}</a> */}
        {/* <a href="/#/rsvp" target="_self" style={{ 
          color: 'white', 
          backgroundColor: '#750D37',
          borderRadius: '8px' 
        }}>RSVP</a> */}

        <Link to="/venue">{t("nav.venue")}</Link>
        <Link to="/program">{t("nav.program")}</Link>
        <Link
            to="/rsvp"
            style={{
              color: "white",
              backgroundColor: "#5A464C",
              borderRadius: "8px",
              padding: "6px 12px",   // recommended for button feel
              textDecoration: "none",
              display: "inline-block"
            }}
          >RSVP
        </Link>
      </div>
      
      <a href="#" onClick={switchLanguage} className="lang-toggle">
        {nextLang.toUpperCase()}
      </a>
    </nav>
  );
}

// const Navbar = () => {
  
// }
 
// export default Navbar;

import { useTranslation } from "react-i18next";
import DoubleHappiness_v0 from "../assets/DoubleHappiness_v0.png"

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
      {/* <a href="/"><h1>A+L</h1></a> */}
      <a href="/" className="brand">
        <img src={DoubleHappiness_v0} alt="A+L logo" className="logo" />
        <h1>A+L</h1>
      </a>

      <div className="links">
        <a href="/venue">{t("nav.venue")}</a>
        <a href="/program">{t("nav.program")}</a>
        <a href="/rsvp" style={{ 
          color: 'white', 
          backgroundColor: '#750D37',
          borderRadius: '8px' 
        }}>RSVP</a>
      </div>

      {/* <button onClick={() => i18n.changeLanguage("en")}>EN</button>
      <button onClick={() => i18n.changeLanguage("it")}>IT</button> */}
      <a href="#" onClick={switchLanguage} className="lang-toggle">
        {nextLang.toUpperCase()}
      </a>
    </nav>
  );
}

// const Navbar = () => {
  
// }
 
// export default Navbar;

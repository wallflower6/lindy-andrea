import { useTranslation } from "react-i18next";
import Chijmes from "../assets/Chijmes.jpg"

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <h2>{t("home.homepage")}</h2>
      <p>{t("home.p0")}</p>

      <figure className="image-figure">
        <img src={Chijmes} className="home-image" />
        <figcaption className="image-caption">
          Photo Credit: Tran Linh Chi
        </figcaption>
      </figure>
    
      <p>{t("home.p1")}</p>
      <p>{t("home.p2")}</p>
      <p>{t("home.p3")}</p>
      
    </div>
  );
}
 
export default Home;
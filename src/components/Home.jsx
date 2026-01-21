import { useTranslation } from "react-i18next";
import Chijmes from "../assets/Chijmes.jpg"

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <h2>{t("home.homepage")}</h2>
      <br />
      <p>{t("home.content_0")}</p>

      <figure className="image-figure">
      <img src={Chijmes} className="home-image" />
      <figcaption className="image-caption">
        Photo Credit: Tran Linh Chi
      </figcaption>
    </figure>
    
      
    </div>
  );
}
 
export default Home;
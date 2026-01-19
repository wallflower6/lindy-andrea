import { useTranslation } from "react-i18next";

const Home = () => {
  const { t, i18n } = useTranslation();

  return (
    <div className="home">
      <h2>{t("home.homepage")}</h2>
    </div>
  );
}
 
export default Home;
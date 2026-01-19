import { useTranslation } from "react-i18next";

const Venue = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="venue">
      <h2>Venue</h2>
    </div>
  );
}
 
export default Venue;
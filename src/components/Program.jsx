import { useTranslation } from "react-i18next";

const Program = () => {
  const { t, i18n } = useTranslation();
  
  return (
    <div className="program">
      <h2>{t("program.title")}</h2>
      <h3>{t("program.program_flow.title")}</h3>
      <p>{t("program.program_flow.tagline")}</p>

      <div className="program_flow">
        <strong>{t("program.program_flow.item0")}</strong>
        <em>{t("program.program_flow.content0")}</em>

        <strong>{t("program.program_flow.item1")}</strong>
        <em>{t("program.program_flow.content1")}</em>

        <strong>{t("program.program_flow.item2")}</strong>
        <em>{t("program.program_flow.content2")}</em>

        <strong>{t("program.program_flow.item3")}</strong>
        <em>{t("program.program_flow.content3")}</em>
      </div>
    </div>
  );
}
 
export default Program;
import "./howToPage.css";
import data from "../../../howTo.json";

const HowToPage = (props: any) => {
  const czText = data.text_cz;
  const enText = data.text_en;
  const deText = data.text_de;

  return (
    <div
      className={
        props.activePage === "how-to"
          ? "how-to_window"
          : "how-to_window how-to_hide"
      }
    >
      <div className="how-to_content">
        {props.language === "cz" && (
          <div dangerouslySetInnerHTML={{ __html: czText }} />
        )}
        {props.language === "en" && (
          <div dangerouslySetInnerHTML={{ __html: enText }} />
        )}
        {props.language === "de" && (
          <div dangerouslySetInnerHTML={{ __html: deText }} />
        )}
      </div>
    </div>
  );
};

export default HowToPage;

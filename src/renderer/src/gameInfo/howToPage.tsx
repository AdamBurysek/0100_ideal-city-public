import "./howToPage.css";
import data from "../../howTo.json";
import { useEffect, useRef } from "react";

const HowToPage = (props: any) => {
  const czText = data.text_cz;
  const enText = data.text_en;
  const deText = data.text_de;

  const howToElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (howToElement.current) {
      howToElement.current.scrollTo({ top: 0 });
    }
  }, [props.activePage === "how-to"]);

  return (
    <div
      className={
        props.activePage === "how-to"
          ? "how-to_window"
          : "how-to_window how-to_hide"
      }
    >
      <div
        ref={howToElement}
        className="how-to_content"
      >
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

import "./howToPage.css";
import { useEffect, useRef } from "react";

const HowToPage = (props: any) => {
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
          <p>
            Vezměte si arch papíru a navrhněte město, v jakém byste rádi žili,
            popřípadě úpravy, jež by vaše město či obec udělaly lepším místem k
            životu. Doplníte-li obrázek textem, bude mu lépe rozumět. Pokud
            chcete, můžete vlastní příspěvek vyfotografovat a vložit do
            databáze, kterou si všichni návštěvníci mohou volně procházet. Stačí
            kliknout na tlačítko 'Nahrát obrázek' a postupovat podle návodu.
          </p>
        )}
        {props.language === "en" && (
          <p>
            Take a piece of paper and design a city you would like to live in,
            or suggest changes that would make your city or town a better place
            to live. If you add text to the picture, it will be easier to
            understand. If you want, you can photograph your own submission and
            add it to a database that all visitors can freely browse. Just click
            the 'Upload Image' button and follow the instructions.
          </p>
        )}
        {props.language === "de" && (
          <p>
            Nehmen Sie ein Blatt Papier und entwerfen Sie eine Stadt, in der Sie
            gerne leben würden, oder schlagen Sie Änderungen vor, die Ihre Stadt
            oder Gemeinde zu einem besseren Ort zum Leben machen würden. Wenn
            Sie dem Bild Text hinzufügen, wird es besser verständlich. Wenn Sie
            möchten, können Sie Ihren eigenen Beitrag fotografieren und in eine
            Datenbank einfügen, die alle Besucher frei durchsuchen können.
            Klicken Sie einfach auf die Schaltfläche 'Bild hochladen' und folgen
            Sie den Anweisungen.
          </p>
        )}
      </div>
    </div>
  );
};

export default HowToPage;

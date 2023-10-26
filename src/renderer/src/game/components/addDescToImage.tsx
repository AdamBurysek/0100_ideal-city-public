import { useNavigate } from "react-router-dom";
import KeyboardComponent from "./keyboard";

interface AddDescToImageProps {
  setGameStarts: (value: boolean) => void;
  capturedImageData: string | null;
  setCapturedImageData: (data: string | null) => void;
  setCroppedImageData: (data: string | null) => void;
  croppedImageData: any;
  finalImageData: string | null;
  setFinalImageData: (data: string | null) => void;
  desc: string;
  setDesc: (value: string) => void;
  handleSave: () => void;
  language: string;
}

const AddDescToImage: React.FC<AddDescToImageProps> = (props) => {
  const navigate = useNavigate();

  function handleBackCropImageClick() {
    props.setCroppedImageData(null);
    props.setDesc("");
    navigate("/cropimage");
  }

  function handleSaveImageClick() {
    if (props.croppedImageData) {
      props.handleSave();
      navigate("/");
      props.setGameStarts(false);
    }
  }

  return (
    <>
      <img
        className="desc_img"
        src={props.croppedImageData}
        alt=""
        style={{ width: 1080 / 1.3, height: 763.682647 / 1.3 }}
      />

      <div className="desc_background"></div>
      <h1 className="desc_textarea">{props.desc}</h1>
      <div className="step_box">
        <h3 className="step_text">
          {props.language === "cz" && "Krok 3/3"}
          {props.language === "en" && "Step 3/3"}
          {props.language === "de" && "Schritt 3/3"}
        </h3>
        <h2
          className={
            props.language === "de"
              ? "step_headline step_headline-smaller"
              : "step_headline"
          }
        >
          {props.language === "cz" && "Doplň popisek"}
          {props.language === "en" && "Add a caption"}
          {props.language === "de" && "Füge eine Bildunterschrift hinzu"}
        </h2>
        <h3
          className={
            props.language === "de"
              ? "step_info step_info-more-padding"
              : "step_info"
          }
        >
          {props.language === "cz" &&
            `Pomocí klávesnice na obrazovce můžete zadat popisek k obrázku. 
            
            Tento krok není povinný, ale může být užitečný pro lepší pochopení obsahu
            obrázku.`}
          {props.language === "en" &&
            `Using the on-screen keyboard, you can enter a caption for the image. 
          
          This step is not mandatory, but it can be useful for better understanding the content of the image.`}
          {props.language === "de" &&
            `Mit der Bildschirmtastatur können Sie eine Bildunterschrift für das Bild eingeben. Dieser Schritt ist nicht verpflichtend, kann aber hilfreich sein, um den Inhalt des Bildes besser zu verstehen.`}
        </h3>
      </div>
      <button
        className="city_button back_button"
        onClick={handleBackCropImageClick}
      >
        {props.language === "cz" && "Zpět"}
        {props.language === "en" && "Back"}
        {props.language === "de" && "Zurück"}
      </button>
      <button
        className="city_button submit_button"
        onClick={handleSaveImageClick}
      >
        {props.language === "cz" && "Uložit"}
        {props.language === "en" && "Save"}
        {props.language === "de" && "Speichern"}
      </button>
      <div className="keyboard_container">
        <KeyboardComponent
          setDesc={props.setDesc}
          desc={props.desc}
        ></KeyboardComponent>
      </div>
    </>
  );
};

export default AddDescToImage;

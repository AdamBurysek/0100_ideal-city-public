import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cropper from "react-cropper";
import { RotateIcon } from "../assets/icons/menuIcons";
import imageSize from "../data/imageSize.json";
import "cropperjs/dist/cropper.css";

interface CropImageProps {
  setGameStarts: (value: boolean) => void;
  capturedImageData: any;
  setCapturedImageData: (data: string | null) => void;
  setCroppedImageData: (data: string | null) => void;
  setThumbnail: (data: string | null) => void;
  language: string;
}

const CropImage: React.FC<CropImageProps> = (props) => {
  const [rotateImg, setRotateImg] = useState(0);

  const navigate = useNavigate();

  function handleBackCropImageClick() {
    props.setCapturedImageData(null);
    navigate("/takepicture");
  }

  const cropperRef = useRef<any>(null);

  function reduceImageQuality(maxSizeInMB: number) {
    let quality = imageSize.startingQuality;
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    if (cropper) {
      const croppedCanvas = cropper.getCroppedCanvas();
      if (croppedCanvas) {
        const targetSizeInBytes = maxSizeInMB * 1024 * 1024;
        let dataUrl = croppedCanvas.toDataURL("image/webp", quality);

        while (dataUrl.length > targetSizeInBytes && quality > 0) {
          quality -= 0.05;
          dataUrl = croppedCanvas.toDataURL("image/webp", quality);
        }
        return dataUrl;
      }
    }
  }

  const handleCrop = () => {
    const dataUrl = reduceImageQuality(imageSize.originalSizeInMb);
    const thumbnailUrl = reduceImageQuality(imageSize.thumbnailSizeInMb);
    props.setCroppedImageData(dataUrl);
    props.setThumbnail(thumbnailUrl);
    navigate("/imagedesc");
  };

  function rotateImage() {
    const imageElement = cropperRef?.current;
    const cropper = imageElement?.cropper;
    if (cropper) {
      cropper.rotateTo(rotateImg);
    }
  }

  useEffect(() => {
    rotateImage();
  }, [rotateImg]);

  return (
    <>
      <div className="image-capture_container">
        <div className="red_outline">
          <Cropper
            ref={cropperRef}
            src={props.capturedImageData}
            dragMode="move"
            style={{ width: 1080, height: 763.682647 }}
            aspectRatio={1080 / 763.682647}
            guides={false}
            center={false}
            rotatable={true}
            cropBoxResizable={false}
            cropBoxMovable={false}
            minCropBoxWidth={1080}
            zoomable={true}
            zoomOnWheel={true}
            zoomTo={0.268}
          />
        </div>
      </div>
      <div className="rotate_icon">
        <RotateIcon />
      </div>
      <div className="rotate-slider_box">
        <input
          className="rotate_slider"
          type="range"
          min="-30"
          max="30"
          value={rotateImg}
          onChange={(e) => setRotateImg(parseInt(e.target.value))}
        />
      </div>
      <div className="step_box">
        <h3 className="step_text">
          {props.language === "cz" && "Krok 2/3"}
          {props.language === "en" && "Step 2/3"}
          {props.language === "de" && "Schritt 2/3"}
        </h3>
        <h2
          className={
            props.language === "de"
              ? "step_headline step_headline-smaller"
              : "step_headline"
          }
        >
          {props.language === "cz" && "Ořízni obrázek"}
          {props.language === "en" && "Crop the image"}
          {props.language === "de" && "Schneide das Bild zu"}
        </h2>
        <h3
          className={
            props.language === "de"
              ? "step_info step_info-smaller"
              : "step_info"
          }
        >
          {props.language === "cz" &&
            `Pomocí jednoho prstu můžete pohybovat obrázkem. 
            Pomocí dvou prstů
            můžete přiblížit nebo oddálit obrázek. 
            Posuvníkem napravo můžete jemně otáčet obrázkem. 

            Po dokončení úprav klikněte na tlačítko
            "Oříznout obrázek".`}
          {props.language === "en" &&
            `Using one finger, you can move the image. 
            Using two fingers, you can zoom in or out the image. 
            You can gently rotate the image using the slider on the right. 
            
            After completing the edits, click the "Crop image" button.`}
          {props.language === "de" &&
            `Mit einem Finger können Sie das Bild bewegen. 
            Mit zwei Fingern können Sie das Bild heranzoomen oder herauszoomen. 
            Sie können das Bild mit dem Schieberegler auf der rechten Seite sanft drehen. 
            
            Klicken Sie nach Abschluss der Bearbeitungen auf die Schaltfläche "Bild zuschneiden".`}
        </h3>
      </div>
      <button
        className="city_button crop_button"
        onClick={handleCrop}
      >
        {props.language === "cz" && "Oříznout obrázek"}
        {props.language === "en" && "Crop an image"}
        {props.language === "de" && "Bild zuschneiden"}
      </button>
      <button
        className="city_button back_button"
        onClick={handleBackCropImageClick}
      >
        {props.language === "cz" && "Zpět"}
        {props.language === "en" && "Back"}
        {props.language === "de" && "Zurück"}
      </button>
    </>
  );
};

export default CropImage;

import { useNavigate } from "react-router-dom";
import { useRef, useEffect, useState } from "react";
import imageSize from "../data/imageSize.json";

interface TakePictureProps {
  setGameStarts: (value: boolean) => void;
  gameStarts: boolean;
  capturedImageData: string | null;
  setCapturedImageData: (data: string | null) => void;
  language: string;
}

function TakePicture(props: TakePictureProps) {
  const [stepAnimation, setStepAnimation] = useState<boolean>(false);

  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const navigate = useNavigate();

  useEffect(() => {
    setStepAnimation(true);
    initializeCamera();
  }, []);

  function handleBackTakePictureClick() {
    props.setGameStarts(false);
    navigate("/");
    setStepAnimation(false);
  }

  const initializeCamera = async () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing the camera:", err);
      }
    }
  };

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const context = canvasRef.current.getContext("2d");
      if (context) {
        context.drawImage(videoRef.current, 0, 0, 4032, 3024);
        const imageData = canvasRef.current.toDataURL(
          "image/webp",
          imageSize.startingQuality
        );
        props.setCapturedImageData(imageData);
        navigate("/cropimage");
      }
    }
  };

  return (
    <div>
      <div className="image-capture_container">
        <div>
          <div className="scale_video">
            <div className="video_container">
              <video
                ref={videoRef}
                width="4032"
                height="3024"
                autoPlay
              />
              <canvas
                ref={canvasRef}
                width="4032"
                height="3024"
                style={{
                  position: "absolute",
                  left: "0px",
                  display: "none",
                }}
              />
            </div>
          </div>
          <button
            className="city_button take-picture_button"
            onClick={captureImage}
          >
            {props.language === "cz" && "Vyfoť obrázek"}
            {props.language === "en" && "Take a picture"}
            {props.language === "de" && "Mach ein Foto"}
          </button>
        </div>
      </div>
      <div className={stepAnimation ? "step_box" : "step_box step_box-hide"}>
        <h3 className="step_text">
          {props.language === "cz" && "Krok 1/3"}
          {props.language === "en" && "Step 1/3"}
          {props.language === "de" && "Schritt 1/3"}
        </h3>
        <h2 className="step_headline">
          {props.language === "cz" && "Vyfoť obrázek"}
          {props.language === "en" && "Take a picture"}
          {props.language === "de" && "Mach ein Foto"}
        </h2>
        <h3 className="step_info">
          {props.language === "cz" &&
            `Umístěte obrázek do žlutého obdélníku a poté jej vyfoťte tlačítkem 
            "Vyfotit obrázek".`}
          {props.language === "en" &&
            `Place the image in the yellow rectangle, then take a picture of it using the 
            "Take a picture" button.`}
          {props.language === "de" &&
            `Legen Sie das Bild in das gelbe Rechteck und machen Sie dann ein Foto davon mit der Schaltfläche 
          "Bild aufnehmen".`}
        </h3>
      </div>
      <button
        className="city_button back_button"
        onClick={handleBackTakePictureClick}
      >
        {props.language === "cz" && "Zpět"}
        {props.language === "en" && "Back"}
        {props.language === "de" && "Zurück"}
      </button>
    </div>
  );
}

export default TakePicture;

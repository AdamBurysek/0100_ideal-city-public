import { useRef, useState } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useNavigate } from "react-router-dom";

type ImageItem = {
  id: string;
  original: string;
  thumbnail: string;
  originalTitle: string;
  deletable: boolean;
};

interface StartPageProps {
  setGameStarts: (value: boolean) => void;
  images: ImageItem[];
  language: string;
}

const StartPage: React.FC<StartPageProps> = (props) => {
  const navigate = useNavigate();
  const [currentDesc, setCurrentDesc] = useState("");

  function halndeTakeImageClick() {
    props.setGameStarts(true);
    navigate("/takepicture");
  }

  const handleSlideChange = (index: number) => {
    setCurrentDesc(props.images[index].originalTitle);
  };

  const imageGalleryRef = useRef(null);

  return (
    <>
      <div className="game">
        <div className="start-page_gallery">
          <ImageGallery
            ref={imageGalleryRef}
            items={props.images}
            showFullscreenButton={true}
            showPlayButton={true}
            showNav={false}
            onSlide={handleSlideChange}
          />
        </div>
        <div
          className={
            currentDesc
              ? "desc_background main-page_desc_background"
              : "desc_background main-page_desc_background desc_background_hide"
          }
        ></div>

        <h1 className="desc_textarea main-page_desc_textarea">{currentDesc}</h1>

        <button
          className="city_button load-image_button"
          onClick={halndeTakeImageClick}
        >
          {props.language === "cz" && "Nahrát obrázek"}
          {props.language === "en" && "Upload an image"}
          {props.language === "de" && "Bild hochladen"}
        </button>
      </div>
    </>
  );
};

export default StartPage;

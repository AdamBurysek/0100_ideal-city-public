import { useEffect, useRef, useState } from "react";
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
  isActive: boolean;
}

interface ImageGallery {
  play: () => void;
  pause: () => void;
  toggleFullScreen: () => void;
}

const StartPage: React.FC<StartPageProps> = (props) => {
  const [currentDesc, setCurrentDesc] = useState<string>("");
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const navigate = useNavigate();
  const imageGalleryRef = useRef<ImageGallery | null>(null);

  useEffect(() => {
    autoPlay();
  }, [props.isActive]);

  function autoPlay() {
    if (imageGalleryRef.current && props.isActive === false) {
      imageGalleryRef.current.play();

      if (isFullscreen === true) {
        imageGalleryRef.current.toggleFullScreen();
      }
    }
    if (imageGalleryRef.current && props.isActive === true) {
      imageGalleryRef.current.pause();
    }
  }

  function halndeTakeImageClick() {
    props.setGameStarts(true);
    navigate("/takepicture");
  }

  const handleSlideChange = (index: number) => {
    setCurrentDesc(props.images[index].originalTitle);
  };

  const handleFullscreenChange = (status: boolean) => {
    setIsFullscreen(status);
  };

  return (
    <>
      <div className="game">
        <div className="start-page_gallery">
          <ImageGallery
            ref={imageGalleryRef}
            items={props.images}
            showFullscreenButton={props.isActive ? true : false}
            showPlayButton={props.isActive ? true : false}
            showNav={false}
            onSlide={handleSlideChange}
            onScreenChange={handleFullscreenChange}
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

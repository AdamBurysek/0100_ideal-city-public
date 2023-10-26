import { useNavigate } from "react-router-dom";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { useEffect, useRef, useState } from "react";
import { RotateIcon } from "../images/Icons/menuIcons";

interface AdminCropImageProps {
  desc: string;
  setDesc: (value: string) => void;
  resetSequence: () => void;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  capturedImageData: any;
  setCapturedImageData: (data: string | null) => void;
  setCroppedImageData: (data: string | null) => void;
  croppedImageData: string | null;
  setThumbnail: (thumbnailData: string | null) => void;
  handleSave: () => void;
}

const AdminCropImage: React.FC<AdminCropImageProps> = (props) => {
  const [rotateImg, setRotateImg] = useState(0);

  const navigate = useNavigate();

  function handleBackCropImageClick() {
    props.setCroppedImageData(null);
    props.setThumbnail(null);
    navigate("/adminpanel");
  }

  const cropperRef = useRef<any>(null);

  function reduceImageQuality(maxSizeInMB: number) {
    let quality = 0.5;
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

  const handleAdminCrop = () => {
    const dataUrl = reduceImageQuality(0.3);
    const thumbnailUrl = reduceImageQuality(0.1);
    props.setCroppedImageData(dataUrl);
    props.setThumbnail(thumbnailUrl);
  };

  useEffect(() => {
    if (props.croppedImageData) {
      props.handleSave();
      navigate("/adminpanel");
    }
  }, [props.croppedImageData]);

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
          />
        </div>
      </div>
      <div className="rotate_icon">
        <RotateIcon></RotateIcon>
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
      <button
        className="city_button crop_button"
        onClick={handleAdminCrop}
      >
        Crop
      </button>
      <button
        className="city_button back_button"
        onClick={handleBackCropImageClick}
      >
        Zpět
      </button>
    </>
  );
};

export default AdminCropImage;

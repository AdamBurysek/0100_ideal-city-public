import { Route, Routes } from "react-router-dom";
import StartPage from "./components/startPage";
import TakePicture from "./components/takePicture";
import { useEffect, useState } from "react";
import CropImage from "./components/cropImage";
import AddDescToImage from "./components/addDescToImage";
import { useNavigate } from "react-router-dom";
import AdminLogin from "./components/adminLogin";
import AdminPanel from "./components/adminPanel";
import AdminCropImage from "./components/adminCropImage";
import IdealCityDataService from "./services/idealCity";
import "./App.css";

type ImageItem = {
  id: string;
  original: string;
  thumbnail: string;
  originalTitle: string;
  deletable: boolean;
};

function App(props: any) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sequence, setSequence] = useState<string[]>([]);
  const [capturedImageData, setCapturedImageData] = useState<string | null>(
    null
  );
  const [croppedImageData, setCroppedImageData] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [desc, setDesc] = useState<string>("");
  const [admminPassword, setAdminPassword] = useState<string | null>(null);
  const [maximumStoredImages, setMaximumStoredImages] = useState<number>(50);

  const navigate = useNavigate();

  useEffect(() => {
    IdealCityDataService.getImages().then((response: any) => {
      setImages(JSON.parse(JSON.stringify(response.data.images)));
    });
    IdealCityDataService.getAdminPassword().then((response: any) => {
      setAdminPassword(response.data[0].password);
    });
    IdealCityDataService.getMaximumImages().then((response: any) => {
      setMaximumStoredImages(response.data[0].maximumPictures);
    });
  }, []);

  function gameReset() {
    if (props.isActive === false) {
      navigate("/");
      props.setGameStarts(false);
    }
  }

  useEffect(() => {
    gameReset();
  }, [props.isActive]);

  const handleAdminButtonClick = (num: string) => {
    const newSequence = [...sequence, num];
    if (newSequence.join("") === "123") {
      navigate("/adminlogin");
    } else if (newSequence.length >= 3) {
      newSequence.shift();
    }
    setSequence(newSequence);
  };

  const resetSequence = () => {
    setSequence([]);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];

    if (file) {
      const reader = new FileReader();

      reader.onloadend = function () {
        const base64String = reader.result as string;
        setCapturedImageData(base64String);
        console.log(capturedImageData);
      };

      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    if (croppedImageData && thumbnail) {
      try {
        const imageItem: ImageItem = {
          id: Date.now().toString(),
          original: croppedImageData,
          thumbnail: thumbnail,
          originalTitle: desc,
          deletable: true,
        };

        IdealCityDataService.addImage(JSON.stringify(imageItem));

        setImages((prevImages) => {
          let updatedImages = [...prevImages];
          while (updatedImages.length + 1 > maximumStoredImages) {
            const sortedImages = [...updatedImages].sort(
              (a, b) => parseInt(a.id) - parseInt(b.id)
            );
            for (const image of sortedImages) {
              if (image.deletable) {
                IdealCityDataService.deleteImage(image.id);
                updatedImages = updatedImages.filter(
                  (img) => img.id !== image.id
                );
                break;
              }
            }
          }
          updatedImages.push(imageItem);
          return updatedImages;
        });
        setDesc("");
        setSelectedFile(null);
        setCapturedImageData(null);
        setThumbnail(null);
        setCroppedImageData(null);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const handleDelete = (id: string) => {
    IdealCityDataService.deleteImage(id);
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((image) => image.id !== id);
      return updatedImages;
    });
  };

  const handleDeletableChange = (id: string, value: boolean) => {
    IdealCityDataService.updateImage(id, value);
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        return { ...image, deletable: value };
      }
      return image;
    });
    setImages(updatedImages);
  };

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <StartPage
              setGameStarts={props.setGameStarts}
              images={images}
              language={props.language}
              isActive={props.isActive}
            />
          }
        />
        <Route
          path="/takepicture"
          element={
            <TakePicture
              setGameStarts={props.setGameStarts}
              gameStarts={props.gameStarts}
              capturedImageData={capturedImageData}
              setCapturedImageData={setCapturedImageData}
              language={props.language}
            />
          }
        />
        <Route
          path="/cropimage"
          element={
            <CropImage
              setGameStarts={props.setGameStarts}
              capturedImageData={capturedImageData}
              setCapturedImageData={setCapturedImageData}
              setCroppedImageData={setCroppedImageData}
              setThumbnail={setThumbnail}
              language={props.language}
            />
          }
        />
        <Route
          path="/imagedesc"
          element={
            <AddDescToImage
              setGameStarts={props.setGameStarts}
              capturedImageData={capturedImageData}
              setCapturedImageData={setCapturedImageData}
              setCroppedImageData={setCroppedImageData}
              croppedImageData={croppedImageData}
              desc={desc}
              setDesc={setDesc}
              handleSave={handleSave}
              language={props.language}
            />
          }
        />
        <Route
          path="/adminlogin"
          element={
            <AdminLogin
              desc={desc}
              setDesc={setDesc}
              resetSequence={resetSequence}
              setGameStarts={props.setGameStarts}
              adminPassword={admminPassword}
            />
          }
        />
        <Route
          path="/adminpanel"
          element={
            <AdminPanel
              desc={desc}
              setDesc={setDesc}
              resetSequence={resetSequence}
              setGameStarts={props.setGameStarts}
              capturedImageData={capturedImageData}
              setCapturedImageData={setCapturedImageData}
              handleFileChange={handleFileChange}
              maximumStoredImages={maximumStoredImages}
              images={images}
              handleDelete={handleDelete}
              handleDeletableChange={handleDeletableChange}
            />
          }
        />
        <Route
          path="/admincrop"
          element={
            <AdminCropImage
              desc={desc}
              setDesc={setDesc}
              resetSequence={resetSequence}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
              capturedImageData={capturedImageData}
              setCapturedImageData={setCapturedImageData}
              setCroppedImageData={setCroppedImageData}
              croppedImageData={croppedImageData}
              setThumbnail={setThumbnail}
              handleSave={handleSave}
            />
          }
        />
      </Routes>
      {!props.gameStarts ? (
        <div className="hidden_buttons">
          <button
            className="button_one"
            onClick={() => handleAdminButtonClick("1")}
          >
            1
          </button>
          <button
            className="button_two"
            onClick={() => handleAdminButtonClick("2")}
          >
            2
          </button>
          <button
            className="button_three"
            onClick={() => handleAdminButtonClick("3")}
          >
            3
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default App;

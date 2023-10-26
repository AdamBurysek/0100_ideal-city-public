import { Route, Routes } from "react-router-dom";
import "./Game.css";
import StartPage from "./components/startPage";
import TakePicture from "./components/takePicture";
import { useEffect, useState } from "react";
import CropImage from "./components/cropImage";
import AddDescToImage from "./components/addDescToImage";
import { useNavigate } from "react-router-dom";
import AdminLogin from "./components/adminLogin";
import AdminPanel from "./components/adminPanel";
import AdminCropImage from "./components/adminCropImage";
import maximumPictures from "./data/max-pics.json";
import IdealCityDataService from "./services/idealCity.js";

type ImageItem = {
  id: string;
  original: string;
  thumbnail: string;
  originalTitle: string;
  deletable: boolean;
};

function Game(props: any) {
  const [images, setImages] = useState<ImageItem[]>([]);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [sequence, setSequence] = useState<string[]>([]);
  const [capturedImageData, setCapturedImageData] = useState<string | null>(
    null
  );
  const [croppedImageData, setCroppedImageData] = useState<string | null>(null);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [desc, setDesc] = useState<string>("");
  const [finalImageData, setFinalImageData] = useState<string | null>(null);

  const navigate = useNavigate();

  const maximumStoredImages: number = maximumPictures.maximumPictures;

  useEffect(() => {
    // const storedImages = localStorage.getItem("images");
    IdealCityDataService.getImages().then((response: any) => {
      setImages(JSON.parse(JSON.stringify(response.data.images)));
      console.log(JSON.parse(JSON.stringify(response.data.images)));
    });
  }, []);

  // useEffect(() => {
  //   const storedImages = localStorage.getItem("images");
  //   if (storedImages) {
  //     setImages(JSON.parse(storedImages));
  //     console.log(JSON.parse(storedImages));
  //   }
  // }, []);

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

        IdealCityDataService.addImage(JSON.stringify(imageItem)).then(
          (response: any) => {
            // setImages(JSON.parse(JSON.stringify(response.data.images)));
            console.log(response);
          }
        );

        setImages((prevImages) => {
          let updatedImages = [...prevImages];
          if (updatedImages.length + 1 > maximumStoredImages) {
            const sortedImages = [...updatedImages].sort(
              (a, b) => parseInt(a.id) - parseInt(b.id)
            );
            for (const image of sortedImages) {
              if (image.deletable) {
                console.log(`Image with ID ${image.id} will be deleted.`);
                IdealCityDataService.deleteImage(image.id).then(
                  (response: any) => {
                    console.log(response);
                  }
                );
                updatedImages = updatedImages.filter(
                  (img) => img.id !== image.id
                );
                break;
              }
            }
          }
          updatedImages.push(imageItem);
          // localStorage.setItem("images", JSON.stringify(updatedImages));
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
    IdealCityDataService.deleteImage(id).then((response: any) => {
      console.log(response);
    });
    setImages((prevImages) => {
      const updatedImages = prevImages.filter((image) => image.id !== id);

      // localStorage.setItem("images", JSON.stringify(updatedImages));
      return updatedImages;
    });
  };

  const handleDeletableChange = (id: string, value: boolean) => {
    IdealCityDataService.updateImage(id, value).then((response: any) => {
      // setImages(JSON.parse(JSON.stringify(response.data.images)));
      console.log(response);
    });
    const updatedImages = images.map((image) => {
      if (image.id === id) {
        return { ...image, deletable: value };
      }
      return image;
    });

    setImages(updatedImages);
    // localStorage.setItem("images", JSON.stringify(updatedImages));
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
              finalImageData={finalImageData}
              setFinalImageData={setFinalImageData}
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

export default Game;

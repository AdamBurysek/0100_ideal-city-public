import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AdminAddImg from "./adminAddImg";
import AdminEditImg from "./adminEditImg";
import "./adminPanel.css";

type ButtonId = "addImg" | "editImg";

type ImageItem = {
  id: string;
  original: string;
  thumbnail: string;
  originalTitle: string;
  deletable: boolean;
};

interface AdminPanelProps {
  desc: string;
  setDesc: (value: string) => void;
  resetSequence: () => void;
  setGameStarts: (value: boolean) => void;
  capturedImageData: string | null;
  setCapturedImageData: (data: string | null) => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  maximumStoredImages: number;
  images: ImageItem[];
  handleDelete: (id: string) => void;
  handleDeletableChange: (id: string, value: boolean) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = (props) => {
  const [adminCurrentPage, setAdminCurrentPage] = useState<string>("editImg");

  const navigate = useNavigate();

  function handleAdminBackButtonClick() {
    props.setDesc("");
    props.resetSequence();
    props.setCapturedImageData(null);
    props.setGameStarts(false);
    navigate("/");
  }

  const handleNextClick = () => {
    navigate("/admincrop");
  };

  const handleNavButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const buttonId = event.currentTarget.id as ButtonId;
    setAdminCurrentPage(buttonId);
  };

  return (
    <>
      {adminCurrentPage === "addImg" && (
        <AdminAddImg
          desc={props.desc}
          setDesc={props.setDesc}
          handleNextClick={handleNextClick}
          handleFileChange={props.handleFileChange}
          capturedImageData={props.capturedImageData}
        />
      )}
      {adminCurrentPage === "editImg" && (
        <AdminEditImg
          images={props.images}
          handleDelete={props.handleDelete}
          handleDeletableChange={props.handleDeletableChange}
          maximumStoredImages={props.maximumStoredImages}
        />
      )}
      <button
        className={
          adminCurrentPage === "editImg"
            ? "city_button edit_img active_button"
            : "city_button edit_img"
        }
        id="editImg"
        onClick={handleNavButtonClick}
      >
        Správa fotek
      </button>
      <button
        className={
          adminCurrentPage === "addImg"
            ? "city_button add_img active_button"
            : "city_button add_img "
        }
        id="addImg"
        onClick={handleNavButtonClick}
      >
        Nahrání fotky
      </button>
      <button
        className="city_button back_button"
        onClick={handleAdminBackButtonClick}
      >
        Zpět
      </button>
    </>
  );
};

export default AdminPanel;

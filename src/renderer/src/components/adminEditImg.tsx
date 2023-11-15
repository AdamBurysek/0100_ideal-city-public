import { PinIcon, TrashIcon } from "../images/Icons/adminIcons";

type ImageItem = {
  id: string;
  original: string;
  thumbnail: string;
  originalTitle: string;
  deletable: boolean;
};

interface AdminEditImgProps {
  images: ImageItem[];
  handleDelete: (image: string) => void;
  handleDeletableChange: (id: string, deletable: boolean) => void;
  maximumStoredImages: number;
}

const AdminEditImg: React.FC<AdminEditImgProps> = (props) => {
  return (
    <div>
      <div className="edit-img_box">
        {props.images.map((image: ImageItem) => (
          <div key={image.id}>
            <img
              className="edit-img"
              src={image.original}
              alt={image.originalTitle}
              width={100}
            />
            <p></p>
            {image.deletable && (
              <button
                className="deletable_button delete_button"
                onClick={() => props.handleDelete(image.id)}
              >
                <TrashIcon></TrashIcon>
              </button>
            )}
            <button
              className="deletable_button"
              style={{
                backgroundColor: image.deletable ? "black" : "green",
                color: "white",
              }}
              onClick={() =>
                props.handleDeletableChange(image.id, !image.deletable)
              }
            >
              <div className="edit-button_icon">
                <PinIcon></PinIcon>
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className="edit-info_box">
        <h2 className="edit-info_text edit-info_text-title">
          Maximální počet obrázků: {props.maximumStoredImages}
        </h2>
        <h2 className="edit-info_text edit-info_text-title">
          Aktuální počet obrázků: {props.images.length}
        </h2>
        <h3 className="edit-info_text edit-info_text-desc">
          V přídpadě, že bude vyčerpán maximální počet obrázku, bude nejstarší
          obrázek, který není "přišpendlený" (zelená iknona špendlíku) nahrazen
          nejnovějším nahraným.
        </h3>
      </div>
    </div>
  );
};

export default AdminEditImg;

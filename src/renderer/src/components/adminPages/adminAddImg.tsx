import KeyboardComponent from "../keyboard";

interface AdminAddImgProps {
  desc: string;
  setDesc: (desc: string) => void;
  handleNextClick: () => void;
  handleFileChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  capturedImageData: string | null;
}

const AdminAddImg: React.FC<AdminAddImgProps> = (props) => {
  return (
    <>
      <div className="file-load_box">
        <input
          className="admin-file_select"
          type="file"
          onChange={props.handleFileChange}
        />
        <div>
          {props.capturedImageData ? (
            <img
              className="admin-image_preview"
              src={props.capturedImageData}
            ></img>
          ) : null}
        </div>
        <input
          className="admin_input img_title"
          type="text"
          autoFocus
          value={props.desc}
          onChange={(e) => props.setDesc(e.target.value)}
          placeholder="Image title"
        />
        <button
          onClick={props.handleNextClick}
          className="city_button admin-save-img_button"
        >
          Next
        </button>
      </div>
      <div className="keyboard_container">
        <KeyboardComponent
          setDesc={props.setDesc}
          desc={props.desc}
        />
      </div>
    </>
  );
};

export default AdminAddImg;

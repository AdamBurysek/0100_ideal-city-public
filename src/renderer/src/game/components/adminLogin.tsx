import { useNavigate } from "react-router-dom";
import KeyboardComponent from "./keyboard";
import { useState } from "react";
import adminPassword from "../data/password.json";

interface AdminLoginProps {
  desc: string;
  setDesc: (value: string) => void;
  resetSequence: () => void;
  setGameStarts: (value: boolean) => void;
}

const AdminLogin: React.FC<AdminLoginProps> = (props) => {
  const [showWrongSign, setShowWrongSign] = useState<boolean>(false);

  const navigate = useNavigate();

  function handleAdminBackButtonClick() {
    props.setDesc("");
    props.resetSequence();
    navigate("/");
  }

  function handleAdminSucessButtonClick() {
    if (props.desc === adminPassword.password) {
      props.setGameStarts(true);
      props.setDesc("");
      navigate("/adminpanel");
    } else {
      wrongPassword();
    }
  }

  function wrongPassword() {
    setShowWrongSign(true);

    setTimeout(() => {
      setShowWrongSign(false);

      console.log(props.desc);
    }, 2000);
  }

  return (
    <>
      <div className="admin_page">
        <input
          className={
            showWrongSign ? "admin_input wrong_password" : "admin_input"
          }
          type="password"
          placeholder={showWrongSign ? "Type Password" : ""}
          value={props.desc}
          onChange={(e) => props.setDesc(e.target.value)}
        ></input>
        <div className="keyboard_container">
          <KeyboardComponent
            setDesc={props.setDesc}
            desc={props.desc}
          ></KeyboardComponent>
        </div>
        <button
          className="city_button back_button"
          onClick={handleAdminBackButtonClick}
        >
          Zpět
        </button>
        <button
          className="city_button admin_button"
          onClick={handleAdminSucessButtonClick}
        >
          Přihlásit
        </button>
      </div>
    </>
  );
};

export default AdminLogin;

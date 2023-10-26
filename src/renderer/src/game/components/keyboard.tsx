import { useState } from "react";
import Keyboard from "react-simple-keyboard";
import "react-simple-keyboard/build/css/index.css";

interface KeyboardComponentProps {
  setDesc: (value: string) => void;
  desc: string;
}

function KeyboardComponent(props: KeyboardComponentProps) {
  const [layout, setLayout] = useState("default");

  const keyboardDisplay = {
    "{num}": "Num",
    "{shift}": "⇧",
    "{bksp}": "⌫",
    "{space}": " ",
  };

  const layouts = {
    default: [
      "ě š č ř ž ý á í é + = {bksp}",
      "q w e r t y u i o p",
      "{num} a s d f g h j k l ú ů",
      "{shift} z x c v b n m , . -",
      "{space}",
    ],
    shift: [
      "Ě Š Č Ř Ž Ý Á Í É + = {bksp}",
      "Q W E R T Y U I O P",
      "{num} A S D F G H J K L Ú Ů",
      "{shift} Z X C V B N M ; : _",
      "{space}",
    ],
    num: [
      "1 2 3 4 5 6 7 8 9 0 @ {bksp}",
      "q w e r t y u i o p",
      "{num} a s d f g h j k l ú ů",
      "{shift} z x c v b n m , . -",
      "{space}",
    ],
  };
  const onChange = (input: string) => {
    if (input === "{bksp}") {
      props.setDesc(input);
    } else if (input.length > 25) {
    } else {
      props.setDesc(input);
    }
  };

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
    if (button === "{num}" || button === "{lock}") handleNum();
  };

  const handleShift = () => {
    const newLayoutName =
      layout === "default"
        ? "shift"
        : "default" || layout === "num"
        ? "default"
        : "shift";
    setLayout(newLayoutName);
  };
  const handleNum = () => {
    const newLayoutName =
      layout === "default"
        ? "num"
        : "default" || layout === "shift"
        ? "default"
        : "num";
    setLayout(newLayoutName);
  };

  return (
    <Keyboard
      layoutName={layout}
      layout={layouts}
      onChange={onChange}
      onKeyPress={onKeyPress}
      display={keyboardDisplay}
    />
  );
}

export default KeyboardComponent;

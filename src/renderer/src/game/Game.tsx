import AppGame from "./App-Game";
import { HashRouter } from "react-router-dom";
import "./Game.css";

function Game(props: any) {
  return (
    <HashRouter>
      <AppGame
        language={props.language}
        setGameStarts={props.setGameStarts}
        isActive={props.isActive}
      ></AppGame>
    </HashRouter>
  );
}

export default Game;

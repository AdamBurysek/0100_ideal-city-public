import UserInterface from "./components/userInterface";
import { useEffect, useState } from "react";
import Game from "./game/Game";
import HowToPage from "./components/sideButtons/howToPage";
import KnowMorePage from "./components/sideButtons/knowMorePage";
import MapPage from "./components/sideButtons/mapPage";
import BlackPage from "./components/sideButtons/blackPage";
import { switchLanguage } from "./utils/functions";

function App() {
  const [activePage, setActivePage] = useState<string>("home");
  const [language, setLanguage] = useState<string>("cz");
  const [gameStarts, setGameStarts] = useState<boolean>(false);
  const [lastActivity, setLastActivity] = useState<Date | null>(null);
  const [isActive, setIsActive] = useState(false);

  const inactivityTimeout = 3.5 * 60 * 1000;

  useEffect(() => {
    const handleActivity = () => {
      setLastActivity(new Date());
      setIsActive(true);
    };
    handleActivity();
    window.addEventListener("mousedown", handleActivity);
    window.addEventListener("mousemove", handleActivity);
    return () => {
      window.removeEventListener("mousedown", handleActivity);
      window.removeEventListener("mousemove", handleActivity);
    };
  }, []);

  useEffect(() => {
    const checkInactivity = () => {
      if (
        lastActivity &&
        new Date().getTime() - lastActivity.getTime() > inactivityTimeout
      ) {
        if (isActive) {
          setIsActive(false);
          setActivePage("home");
          setLanguage("cz");
        }
      } else {
        setIsActive(true);
      }
    };
    let intervalId = setInterval(checkInactivity, 1000);
    return () => clearInterval(intervalId);
  }, [lastActivity, isActive]);

  function handleLanguageClick() {
    setLanguage(switchLanguage(language));
  }

  function handleSideButtonClick(e: React.MouseEvent<HTMLButtonElement>) {
    const buttonId: string = e.currentTarget.id;
    setActivePage(buttonId);
  }

  return (
    <>
      <div>
        <UserInterface
          activePage={activePage}
          language={language}
          handleLanguageClick={handleLanguageClick}
          handleSideButtonClick={handleSideButtonClick}
          gameStarts={gameStarts}
        >
          <Game
            language={language}
            setGameStarts={setGameStarts}
            gameStarts={gameStarts}
            isActive={isActive}
          ></Game>
        </UserInterface>
        <HowToPage
          activePage={activePage}
          language={language}
        ></HowToPage>
        <KnowMorePage
          activePage={activePage}
          language={language}
        ></KnowMorePage>
        <MapPage
          activePage={activePage}
          language={language}
        ></MapPage>
        <BlackPage></BlackPage>
      </div>
    </>
  );
}

export default App;

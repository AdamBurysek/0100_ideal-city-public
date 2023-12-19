import Lol from "../assets/icons/animated-gif-loading-spinner-2.gif";

const Loading = () => {
  return (
    <div className="loading_container">
      <span className="loader_spinner">
        <div>
          <img
            className="loader_image"
            src={Lol}
          />
        </div>
      </span>
      <h2 className="loading-text">Loading...</h2>
    </div>
  );
};

export default Loading;

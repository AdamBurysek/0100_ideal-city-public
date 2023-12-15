import { Loader } from "@renderer/assets/icons/loader";

const Loading = () => {
  return (
    <div className="loading_container">
      <span className="loader_spinner">
        <Loader />
      </span>
      <h2 className="loading-text">Loading...</h2>
    </div>
  );
};

export default Loading;

import { useState } from "react";
import "./loadingModal.css";
//specify the type of loader to be used
import MoonLoader from "react-spinners/MoonLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

// loading component is rendered when data is being fetched and could result in a delay before the data arrives
function LoadingModal() {
  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("black");

  return (
    <div className="sweet-loading">
      <MoonLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={90}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}

export default LoadingModal;

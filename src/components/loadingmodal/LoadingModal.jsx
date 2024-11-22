import { useState } from "react";
import "./loadingModal.css";
import MoonLoader from "react-spinners/MoonLoader";

const override = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

// component is used when data is being fetched that causes a delay
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

import { useState } from "react";
import "./adminmodal.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import LoadingModal from "../loadingmodal/LoadingModal";

const AdminModal = () => {
  //required stateful variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useAuthContext(); // dispatch method is used to update the global authcontext

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    //login an admin user
    const response = await fetch("http://localhost:4000/api/auth/adminlogin", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
      setIsLoading(false);
      console.log(json.error);
    }

    if (response.ok) {
      localStorage.setItem("adminUser", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
      setError(null);
    }
  };

  return (
    <div className="adminModalContainer">
      <form onSubmit={handleSubmit} className="adminModal">
        <div className="formItem">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="the username is admin"
            className="formInput"
          />
        </div>
        <div className="formItem">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="the password is secret"
            className="formInput"
          />
        </div>
        <button type="submit" className="fButton" disabled={isLoading}>
          Log in
        </button>
        <Link to="/login">
          <button className="cancelBtn">Cancel</button>
        </Link>
      </form>
      {isLoading && <LoadingModal />}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default AdminModal;

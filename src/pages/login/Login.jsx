import React, { useState } from "react";
//import the custom css file
import "./login.css";
import useLogin from "../../hooks/useLogin";
import LoadingModal from "../../components/loadingmodal/LoadingModal";

const Login = () => {
  //the state values below are used to log in a user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //the useLogin hook returns the loading status, the potential error and the login function
  const { isLoading, error, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault(); //prevent the default form actions i.e. refreshing the webpage

    // call the login function with the username and password
    await login(username, password);
  };

  return (
    <div className="formContainer">
      <form onSubmit={handleSubmit} className="form">
        <div className="formItem">
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
            className="formInput"
          />
        </div>
        <div className="formItem">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="formInput"
          />
        </div>
        <button type="submit" className="fButton" disabled={isLoading}>
          Login
        </button>
      </form>
      {isLoading && <LoadingModal />}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;

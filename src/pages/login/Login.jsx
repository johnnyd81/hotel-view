import React, { useState } from "react";
import "./login.css";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  //the state values below are used to log in a user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { isLoading, error, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(username, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer">
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
          Log in
        </button>
      </form>
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Login;

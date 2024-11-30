import React, { useState } from "react";
import "./signup.css";
import useSignUp from "../../hooks/useSignUp";
import LoadingModal from "../../components/loadingmodal/LoadingModal";

const Signup = () => {
  // the stateful values username and password are used to register a new user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  //the useSignUp hook returns the loading status, a potential error and the signup function
  const { error, isLoading, signup } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, password);
  };

  return (
    <div className="formContainer1">
      <form onSubmit={handleSubmit} className="form1">
        <div className="formItem">
          <label>Username: </label>
          <input
            type="text"
            value={username}
            placeholder="Enter username"
            onChange={(e) => setUsername(e.target.value)}
            className="formInput"
          />
        </div>
        <div className="formItem">
          <label>Password: </label>
          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            className="formInput"
          />
        </div>
        <button type="submit" className="fButton1" disabled={isLoading}>
          Sign up
        </button>
      </form>
      {isLoading && <LoadingModal />}
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Signup;

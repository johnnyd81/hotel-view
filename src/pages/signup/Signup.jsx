import React, { useState } from "react";
import "./signup.css";
import useSignUp from "../../hooks/useSignUp";

const Signup = () => {
  //the stateful values below are used to sign up a user
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, signup } = useSignUp();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup(username, password);
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="formContainer1">
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
      {error && <div className="error">{error}</div>}
    </div>
  );
};

export default Signup;

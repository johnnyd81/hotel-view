import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//this function returns values that allows a user to log in i.e. isLoading, error, login
const useLogin = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();

  //login function that attempts to log a user in
  const login = async (username, password) => {
    setError(null);
    setIsLoading(true);
    
    const response = await fetch("http://localhost:4000/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setIsLoading(false);
      setError(json.error);
    }

    if (response.ok) {
      // if a user logs in successfully they are stored in localStorage
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };

  return { error, isLoading, login };
};

export default useLogin;

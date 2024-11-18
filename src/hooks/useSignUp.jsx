import { useState } from "react";
import { useAuthContext } from "./useAuthContext";

//this functions provides values that allows a user to sign up
const useSignUp = () => {
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const { dispatch, server } = useAuthContext();

  const signup = async (username, password) => {
    setIsLoading(true);
    setError(null);

    const response = await fetch(server + "/api/auth/signup", {
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
    }

    if (response.ok) {
      //if a user signs up successfully they are stored in localStorage
      localStorage.setItem("user", JSON.stringify(json));
      dispatch({ type: "LOGIN", payload: json });
      setIsLoading(false);
    }
  };
  return { error, isLoading, signup };
};

export default useSignUp;

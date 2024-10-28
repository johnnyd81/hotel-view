import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

//by calling the hook all the contextual values are available to that module
export const useAuthContext = () => {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw Error("context must be used inside the AuthContextProvider");
  }
  
  return context;
};

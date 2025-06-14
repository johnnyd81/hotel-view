import { useContext } from "react"; 
import { AuthContext } from "../context/AuthContext";

//by calling the hook all the contextual values are available to that specific module
export const useAuthContext = () => {
  //extract all the contextual values and store it in the context variable i.e. in the form of an object
  const context = useContext(AuthContext);
  
  //check if the context variable is available
  if (!context) {
    throw Error("context must be used inside the AuthContextProvider");
  }

  // when the useAuthContext function is called it makes the context variables available to that file
  return context;
};

import { useContext } from "react";
import { Usercontext } from "../context/Usercontext";

//by calling the hook all the context values are available to that module
export const useUsercontext = () => {
  const context = useContext(Usercontext);

  if (!context) {
    throw Error("context needs to be used inside UsercontextProvider");
  }

  return context;
};

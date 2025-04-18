import { useContext } from "react";
import { searchContext } from "../context/SearchContext";

//by calling the hook all the contextual values are available to that specific module
export const useSearchContext = () => {
  const context = useContext(searchContext);

  if (!context) {
    throw Error("Context can only be used inside the SearchContextProvider");
  }

  return context;
};

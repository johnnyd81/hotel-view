import { createContext, useReducer } from "react";

//allows the search values to be available in the entire app
export const searchContext = createContext();

export const searchReducer = (state, action) => {
  switch (action.type) {
    case "NEW_SEARCH":
      return action.payload;
    case "RESET_SEARCH":
      return state;
    default:
      return state;
  }
};

export const SearchContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(searchReducer, { 
    destination: null, //the initial values are all specified here
    date: [],
    choices: { adult: 1, children: 0, room: 1 },
  });

  return (
    <searchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </searchContext.Provider>
  );
};

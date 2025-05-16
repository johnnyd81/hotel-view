import { createContext, useReducer } from "react";

//allows the search values to be available in the entire app by making it a global variable
export const searchContext = createContext();

//The searchReducer function modifies the global search state object i.e. destination, date and choices
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
  //useReducer hook takes a reducer function (searchReducer created above) and the initial state as arguments
  const [state, dispatch] = useReducer(searchReducer, {
    destination: null, //the initial values are all specified here
    date: [],
    choices: { adult: 1, children: 0, room: 1 },
  });

  return (
    //the value prop contains the data that is available to the entire app
    <searchContext.Provider value={{ ...state, dispatch }}>
      {children}
    </searchContext.Provider>
  );
};

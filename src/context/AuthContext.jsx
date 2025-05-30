import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext(); //creates the auth context to be used globally in the app

//the function below provides actions that can be performed on the state variable i.e. the user
export const authReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        user: action.payload,
        adminUser: action.payload,
      };
    case "LOGOUT":
      return {
        user: null,
        adminUser: null,
      };
    default:
      return state;
  }
};

//the function below wraps around the entire app and makes the state value available in every file within the app
export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, {
    user: null,
    adminUser: null,
  });

  const server = import.meta.env.VITE_BACKEND_SERVER;

  console.log("Authcontext state", state);

  //the useEffect checks if a user is present in localStorage. If so then it logs the user in automatically
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    //const adminUser = JSON.parse(localStorage.getItem("adminUser"));

    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch, server }}>
      {children}
    </AuthContext.Provider>
  );
};

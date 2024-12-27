import { createContext, useReducer } from "react";

export const Usercontext = createContext(); //creates context

//specifies actions that can be used to change the state variable i.e. users
export const usersReducer = (state, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        users: action.payload,
      };
    case "DELETE_USER":
      return {
        users: state.users.filter((u) => u._id !== action.payload._id),
      };
    case "EDIT_USER":
      const editedUser = action.payload;
      const editedUsers = state.users.map((user) => {
        if (user._id === editedUser._id) {
          return editedUser;
        }
        return user;
      });
      return {
        ...state,
        users: editedUsers,
      };
    default:
      return state;
  }
};

export const UsercontextProvider = ({ children }) => {
  //useReducer hook takes a reducer function (usersReducer created above) and the initial state value i.e. users 
  const [state, dispatch] = useReducer(usersReducer, {
    users: [],
  });

  //the value prop contains an object that is made available to all components in the app
  //the dispatch function is used to update the stateful value when it needs to be done
  return (
    <Usercontext.Provider value={{ ...state, dispatch }}>
      {children}
    </Usercontext.Provider>
  );
};

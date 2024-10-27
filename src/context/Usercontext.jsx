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
  const [state, dispatch] = useReducer(usersReducer, {
    users: [],
  });

  return (
    <Usercontext.Provider value={{ ...state, dispatch }}>
      {children}
    </Usercontext.Provider>
  );
};

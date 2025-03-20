import { useAuthContext } from "./useAuthContext";

//the useLogout hook removes the user from localStorage thereby logging them out
const useLogout = () => {
  //the dispatch method updates the global user authcontext after a user logs out
  const { dispatch } = useAuthContext();

  const logout = () => {
    //remove the stored "user" variable from the browser localStorage
    localStorage.removeItem("user");
    localStorage.removeItem("adminUser");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useLogout;

import { useAuthContext } from "./useAuthContext";

//the useLogout hook removes the user from localStorage thereby logging them out
const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
  };
  return { logout };
};

export default useLogout;

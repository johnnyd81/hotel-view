import "./navbar.css";
import { Link } from "react-router-dom"; //allows me to link to different pages in my app
import { useAuthContext } from "../../hooks/useAuthContext"; //imports authentication contextual state
import useLogout from "../../hooks/useLogout"; //the useLogout hook allows me to log out a user

const Navbar = () => {
  const { user } = useAuthContext(); //makes the user context available to the module

  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  //by using conditional rendering only certain buttons are available on the navbar according to the user auth status
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="navTitle">Hotel Booking App</span>
        <div className="navItems">
          {!user ? (
            <>
              <Link to="/">
                <button className="navButton">Log in</button>
              </Link>
              <Link to="/signup">
                <button className="navButton">Register</button>
              </Link>
              <Link to="/adminmodal">
                <button className="navButton">Admin</button>
              </Link>
            </>
          ) : (
            <>
              <span className="userName">Hello {user.username}</span>
              <button className="navButton" onClick={handleClick}>
                Log out
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

import { useState } from "react";
import "./navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom"; //allows me to link to different pages in my app
import { useAuthContext } from "../../hooks/useAuthContext"; //imports authentication contextual state
import useLogout from "../../hooks/useLogout"; //the useLogout hook allows me to log out a user

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [classValue, setClassValue] = useState("");
  const { user } = useAuthContext(); //makes the user context available in the module

  const { logout } = useLogout();

  const handleClick = () => {
    logout();
  };

  const showMenuValues = () => {
    setClassValue("show");
    setShowMenu(!showMenu);
  };

  const hideMenuValues = () => {
    setClassValue("");
    setShowMenu(!showMenu);
  };

  const menu = (
    <nav className={`menu ${classValue}`} onClick={hideMenuValues}>
      <Link to="/" className="menuLink">
        Login
      </Link>
      <Link to="/signup" className="menuLink">
        Register
      </Link>
      <Link to="/adminmodal" className="menuLink">
        Admin
      </Link>
      <span className="closeMenu">
        <FontAwesomeIcon
          icon={faX}
          className="closeX"
          title="Close menu"
          onClick={hideMenuValues}
        />
      </span>
    </nav>
  );

  const menu2 = (
    <nav className={`menu ${classValue}`} onClick={hideMenuValues}>
      <Link to="/" className="menuLink">
        Home
      </Link>
      <Link to="/" className="menuLink" onClick={handleClick}>
        Logout
      </Link>
      <span className="userName">Hello {user && user.username}</span>
      <span className="closeMenu">
        <FontAwesomeIcon
          icon={faX}
          className="closeX"
          title="Close menu"
          onClick={hideMenuValues}
        />
      </span>
    </nav>
  );

  //by using conditional rendering only certain buttons are available on the navbar according to the user auth status
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" className="homeLink">
          <span className="navTitle" title="Go to homepage">
            Hotel Booking App
          </span>
        </Link>
        <FontAwesomeIcon
          onClick={showMenuValues}
          icon={faBars}
          className="nNavbarmenu"
          title="Click to open menu"
        />
        {showMenu && !user ? menu : menu2}
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
              <Link to="/">
                <button className="navButton">Home</button>
              </Link>
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

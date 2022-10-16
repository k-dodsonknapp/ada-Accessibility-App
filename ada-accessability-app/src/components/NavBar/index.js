import { Link } from "react-router-dom";
import "./navBar.css";
import signInIcon from "./sign-in-logo.svg";
import logo from "./logoRppl.png";

const NavBar = () => {
  return (
    <div className="header">
      <div className="logo">
        <img src={logo} className="logo-img" alt="logo" />
      </div>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link className="active" to="/tracker">
          Tracker
        </Link>
        <Link to="/resources">Resources</Link>
        <Link to="/community">Community</Link>
      </div>

      <div className="sign-in">
        <img src={signInIcon} className="sign-in-icon" alt="sign-in-icon" />
        <p>Hi Emily!</p>
      </div>
    </div>
  );
};

export default NavBar;

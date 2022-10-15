import { Link } from "react-router-dom";
import "./navBar.css";
import signInIcon from "./sign-in-logo.svg";

const NavBar = () => {
  return (
    <div className="header">
      <div className="logo">Logo</div>

      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/tracker">Tracker</Link>
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

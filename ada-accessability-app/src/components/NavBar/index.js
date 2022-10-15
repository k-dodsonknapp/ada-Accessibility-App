import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div>Logo</div>

      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/tracker">Tracker</Link>
      <Link to="/resources">Resources</Link>
      <Link to="/community">Community</Link>
      <div>User SignIn / User Image</div>
    </div>
  );
};

export default NavBar;

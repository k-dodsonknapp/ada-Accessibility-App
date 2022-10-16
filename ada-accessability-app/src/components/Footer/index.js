import React from "react";
import "./footer.css";
import logo from "./logoRppl.png";
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <div className="footer">
        <img className="foot-logo-img" src={logo}></img>
        <ul className="site-map-UL">
          <title>Site Map</title>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to='/tracker'>Tracker</NavLink>
          </li>
          <li>
            <NavLink to="/resources">Resources</NavLink>
          </li>
          <li>
            <NavLink to="community">Community</NavLink>
          </li>
        </ul>
    </div>
  )
}

export default Footer;

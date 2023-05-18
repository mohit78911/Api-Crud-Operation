import React from "react";
import { NavLink } from "react-router-dom";
import ".//Navbar.css";
import Title from "./Title";
import ".//App.css";

function Navbar() {
  return (
    <>
      <div className="blackcolor">
        <ul>
          <li>  <NavLink
                  className="nav-bar-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "skyblue" : "" };
                  }}
                  to="/"
                >
                  Home
                </NavLink></li>
          <li> <NavLink
                  className="nav-bar-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "skyblue" : "" };
                  }}
                  to="/Story"
                >
                  About
                </NavLink></li>
          <li> <NavLink
                  className="nav-bar-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "skyblue" : "" };
                  }}
                  to="/text"
                >
                  Text Field
                </NavLink></li>
        </ul>
      </div>
    </>
  );
}
export default Navbar;

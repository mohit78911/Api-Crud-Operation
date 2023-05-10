import React from "react";
import { NavLink } from "react-router-dom";
import ".//Navbar.css";
import Title from "./Title";
import ".//App.css";

function Navbar() {
  return (
    <div className="blackbck">
      <div className="row">
        <div className="col leftpro autoMargin">
          <Title title="React Crud Operation" />
        </div>
        <div className="col ">
          <div>
            <ul className=" navbar">
              <li >
                <NavLink
                  className="nav-bar-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "skyblue" : "" };
                  }}
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  className="nav-bar-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "skyblue" : "" };
                  }}
                  to="/Story"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  className="nav-bar-link"
                  style={({ isActive }) => {
                    return { color: isActive ? "skyblue" : "" };
                  }}
                  to="/text"
                >
                  Text Field
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

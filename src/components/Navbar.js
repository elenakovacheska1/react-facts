import React from "react";
import reactLogo from "../images/react.png";

let Navbar = (props) => {
  const mode = props.dark ? "dark" : "light";
  return (
    <nav className={mode}>
      <div className="nav-title">
        <img src={reactLogo} alt="React Logo" />
        <h2 className="react-facts">ReactFacts</h2>
      </div>
      <div className="nav-mode-switch">
        <h3 className="modes">Dark Mode</h3>
        {/* Rounded switch */}
        <label className="switch">
          <input onClick={props.toggleDarkMode} type="checkbox" />
          <span className="slider round"></span>
        </label>
        <h3 className="modes">Light Mode</h3>
      </div>
      {/* <h3 className={`react-course ${mode}`}>React Course - Project 1</h3> */}
    </nav>
  );
};

export default Navbar;

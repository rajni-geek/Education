/* eslint-disable jsx-a11y/alt-text */

import React from "react";
import "./Navbar.css";
import MyImage from "./testbook.jpg"

const Navbar = () => {
  return (
      <nav className="navbar">
        <div className="logo">
          <img src={MyImage}/>
          </div>
        <ul className="nav-links">
          <li>Exams</li>
          <li>SuperCoaching</li>
          <li>Test Series</li>
          <li>Skill Academy</li>
          <li>Pass</li>
          <li>More</li>
        </ul>
           <input type="text" placeholder="search"/>
        <button className="get-started">Get Started</button>
      </nav>
  );
};

export default Navbar;

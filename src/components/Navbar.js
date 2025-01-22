import React from "react";
import { Link } from "react-router-dom";
import "../stylesheet.css"; // Import the new stylesheet

function Navbar() {
  return (
    <nav className="nav">
      <div className="container">
        <h1 className="gradient-text">My Portfolio</h1>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/resume">Resume</Link></li>
          <li><Link to="/chatbot">Chatbot</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;

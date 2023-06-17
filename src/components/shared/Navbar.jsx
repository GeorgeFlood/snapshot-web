import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";

const Navbar = () => {
  const [open, isOpen] = useState(false);

  const handleToggle = () => {
    isOpen(!open);
  };

  return (
    <div className="nav">
      <div className="nav__logo">
        <Link to="/">
          <img src={logo} alt="snapshot logo" />
        </Link>
      </div>

      <nav>
        <ul className="nav__nav">
          <li>
            <Link to="/features" className="nav__link">
              STORIES
            </Link>
          </li>
          <li>
            <Link to="/home" className="nav__link">
              FEATURES
            </Link>
          </li>
          <li>
            <Link to="/pricing" className="nav__link">
              PRICING
            </Link>
          </li>
        </ul>
      </nav>

      <div>
        <button className="nav__btn">GET AN INVITE</button>
      </div>

      <div className={`hamburger${open ? " open" : ""}`} onClick={handleToggle}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`mobile ${open ? " active" : " inactive"}`}>
        <nav>
          <ul className="mobile__nav">
            <li>
              <Link to="/features" className="nav__link">
                STORIES
              </Link>
            </li>
            <li>
              <Link to="/home" className="nav__link">
                FEATURES
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="nav__link">
                PRICING
              </Link>
            </li>
            <button className="mobile__btn">GET AN INVITE</button>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;

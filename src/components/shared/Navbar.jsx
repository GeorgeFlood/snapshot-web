import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="snapshot logo" />
      </div>

      <nav>
        <ul className="nav__nav">
          <a href="">
            <li>STORIES</li>
          </a>
          <a href="">
            <li>FEATURES</li>
          </a>
          <a href="">
            <li>PRICING</li>
          </a>
        </ul>
      </nav>

      <div>
        <button className="nav__btn">GET AN INVITE</button>
      </div>
    </div>
  );
};

export default Navbar;

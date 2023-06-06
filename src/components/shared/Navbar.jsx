import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo.svg";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="nav__logo">
        <img src={logo} alt="snapshot logo" />
      </div>

      <nav>
        <ul className="nav__nav">
          <li>
            <Link to="/" className="nav__link">
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
    </div>
  );
};

export default Navbar;

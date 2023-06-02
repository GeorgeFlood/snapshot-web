import React from "react";
import logo from "../../assets/shared/desktop/logo.svg";

import facebook from "../../assets/shared/desktop/facebook.svg";
import youtube from "../../assets/shared/desktop/youtube.svg";
import twitter from "../../assets/shared/desktop/twitter.svg";
import pinterest from "../../assets/shared/desktop/pinterest.svg";
import instagram from "../../assets/shared/desktop/instagram.svg";
import arrow from "../../assets/shared/desktop/arrow.svg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="logo--links">
        <div className="socials">
          <img src={logo} alt="snapshot logo" />
          <nav>
            <ul>
              <a>
                <li>
                  <img src={facebook} alt="facebook logo" />
                </li>
              </a>
              <a>
                <li>
                  <img src={youtube} alt="youtube logo" />
                </li>
              </a>
              <a>
                <li>
                  <img src={twitter} alt="twitter logo" />
                </li>
              </a>
              <a>
                <li>
                  <img src={pinterest} alt="pinterest logo" />
                </li>
              </a>
              <a>
                <li>
                  <img src={instagram} alt="instagram logo" />
                </li>
              </a>
            </ul>
          </nav>
        </div>

        <div className="footer--nav">
          <nav>
            <ul>
              <li>Home</li>
              <li>Stories</li>
              <li>Features</li>
              <li>Pricing</li>
            </ul>
          </nav>
        </div>
      </div>

      <div className="invite--rights">
        <div className="footer--invite">
          <p>GET AN INVITE</p>
          <img src={arrow} alt="arrow" />
        </div>
        <div className="copyrights">
          <p>Copyright 2023 All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

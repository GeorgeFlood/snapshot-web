import React from "react";
import arrow from "../../assets/shared/desktop/arrow.svg";

export const Header = () => {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__info">
          <h1 className="header__info--title">
            CREATE AND SHARE YOUR PHOTO STORIES
            <span className="design-line"></span>
          </h1>
          <p className="header__info--para">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className="header__info--invite">
            <p>GET AN INVITE</p>
            <svg
              className="header__info--arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="14"
            >
              <g fill="none" fill-rule="evenodd" stroke="#000">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
        <div className="header__img"></div>
      </div>

      <div className="header__container second-container">
        <div className="header__img"></div>
        <div className="header__info">
          <h1 className="header__info--title">BEAUTIFUL STORIES EVERY TIME</h1>
          <p className="header__info--para">
            We provide design templates to ensure your stories look terrific.
            Easily add photos, text, embed maps and media from other networks.
            Then share your story with everyone.
          </p>
          <div className="header__info--invite">
            <p>GET AN INVITE</p>
            <svg
              className="header__info--arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="14"
            >
              <g fill="none" fill-rule="evenodd" stroke="#000">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
      </div>

      <div className="header__container third-container">
        <div className="header__info">
          <h1 className="header__info--title">DESIGNED FOR EVERYONE</h1>
          <p className="header__info--para">
            Photosnap is a platform for photographers and visual storytellers.
            We make it easy to share photos, tell stories and connect with
            others.
          </p>
          <div className="header__info--invite">
            <p>GET AN INVITE</p>
            <svg
              className="header__info--arrow"
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="14"
            >
              <g fill="none" fill-rule="evenodd" stroke="#000">
                <path d="M0 7h41.864M35.428 1l6 6-6 6" />
              </g>
            </svg>
          </div>
        </div>
        <div className="header__img"></div>
      </div>
    </div>
  );
};

export default Header;

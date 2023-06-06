import React from "react";

const Header = () => {
  return (
    <div className="header pricing">
      <div className="header__container pricing__container">
        <div className="header__info">
          <h1 className="header__info--title">
            PRICING
            <span className="design-line"></span>
          </h1>
          <p className="header__info--para">
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </p>
        </div>
        <div className="header__img"></div>
      </div>
    </div>
  );
};

export default Header;

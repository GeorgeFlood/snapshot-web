import React from "react";

const Header = () => {
  return (
    <div className="header features">
      <div className="header__container features__container">
        <div className="header__info">
          <h1 className="header__info--title">
            Features
            <span className="design-line"></span>
          </h1>
          <p className="header__info--para">
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </p>
        </div>
        <div className="header__img"></div>
      </div>
    </div>
  );
};

export default Header;

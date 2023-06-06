import React from "react";
import arrow from "../../assets/shared/desktop/arrow.svg";

const BetaBanner = () => {
  return (
    <div className="banner">
      <div className="banner--beta">
        <h1>WE'RE IN BETA. GET YOUR INVITE TODAY!</h1>
      </div>
      <div className="footer--invite">
        <p>GET AN INVITE</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default BetaBanner;

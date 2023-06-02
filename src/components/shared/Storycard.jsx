import React from "react";
import arrow from "../../assets/shared/desktop/arrow.svg";

export const Storycard = ({ img, location, author }) => {
  const cardStyle = {
    backgroundImage: `url(${img})`,
  };

  return (
    <div className="card" style={cardStyle}>
      <div className="card__info">
        <h1>{location}</h1>
        <p>By {author}</p>
      </div>
      <div className="card__link">
        <p>READ STORY</p>
        <img src={arrow} alt="arrow" />
      </div>
    </div>
  );
};

export default Storycard;

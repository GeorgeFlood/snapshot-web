import React from "react";
import { Storycard } from "../shared/Storycard";
import mountains from "../../assets/stories/desktop/mountains.jpg";
import cityscapes from "../../assets/stories/desktop/cityscapes.jpg";
import voyage from "../../assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../../assets/stories/desktop/architecturals.jpg";

import worldTour from "../../assets/stories/desktop/world-tour.jpg";
import unforeseen from "../../assets/stories/desktop/unforeseen-corners.jpg";
import king from "../../assets/stories/desktop/king-on-africa.jpg";
import trip from "../../assets/stories/desktop/trip-to-nowhere.jpg";

const Gallery = () => {
  const stories = [
    {
      img: mountains,
      location: "The Mountains",
      author: "John Appleseed",
    },
    {
      img: cityscapes,
      location: "Sunset Cityscapes",
      author: "Benjamin Cruz",
    },
    {
      img: voyage,
      location: "18 days Voyage",
      author: "Alexei Borodin",
    },
    {
      img: architecturals,
      location: "Architecturals",
      author: "Samantha Brooke",
    },
    {
      img: worldTour,
      location: "World Tour 2019",
      author: "by Timothy Wagner",
    },
  ];

  return (
    <div className="gallery">
      <div className="storycard-list">
        {stories.map((story, index) => (
          <Storycard
            key={index}
            img={story.img}
            location={story.location}
            author={story.author}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

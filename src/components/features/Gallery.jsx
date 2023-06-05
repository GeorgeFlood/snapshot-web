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

import sea from "../../assets/stories/desktop/rage-of-the-sea.jpg";
import free from "../../assets/stories/desktop/running-free.jpg";
import waves from "../../assets/stories/desktop/behind-the-waves.jpg";
import calm from "../../assets/stories/desktop/calm-waters.jpg";

import milky from "../../assets/stories/desktop/milky-way.jpg";
import darkForest from "../../assets/stories/desktop/dark-Forest.jpg";
import beauty from "../../assets/stories/desktop/somwarpet.jpg";
import dreams from "../../assets/stories/desktop/land-of-dreams.jpg";

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
      author: "Timothy Wagner",
    },
    {
      img: unforeseen,
      location: "Unforeseen Corners",
      author: "William Malcom",
    },
    {
      img: king,
      location: "King on Africa: Part II",
      author: "Tim Hillenburg",
    },
    {
      img: trip,
      location: "The Trip to Nowhere",
      author: "Felicia Rourke",
    },
    {
      img: sea,
      location: "Rage of The Sea",
      author: "Mohammed Abdul",
    },
    {
      img: free,
      location: "Running Free",
      author: "Michelle",
    },
    {
      img: waves,
      location: "Behind the Waves",
      author: "Lamarr Wilson",
    },
    {
      img: calm,
      location: "Calm Waters",
      author: "Samantha Brooke",
    },
    {
      img: milky,
      location: "The Milky Way",
      author: "Benjamin Cruz",
    },
    {
      img: darkForest,
      location: "Night at The Dark Forest",
      author: "Mohammed Abdul",
    },
    {
      img: beauty,
      location: "Somwarpet’s Beauty",
      author: "Michelle",
    },
    {
      img: dreams,
      location: "Land of Dreams",
      author: "William Malcolm",
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

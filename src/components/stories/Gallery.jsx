import { Storycard } from "../shared/Storycard";
import InfoComp from "./InfoComp";
import mountains from "../../assets/stories/desktop/mountains.jpg";
import cityscapes from "../../assets/stories/desktop/cityscapes.jpg";
import voyage from "../../assets/stories/desktop/18-days-voyage.jpg";
import architecturals from "../../assets/stories/desktop/architecturals.jpg";

import responsive from "../../assets/features/desktop/responsive.svg";
import noLimit from "../../assets/features/desktop/no-limit.svg";
import embed from "../../assets/features/desktop/embed.svg";

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
  ];

  const info = [
    {
      img: responsive,
      title: "100% Responsive",
      para: `No matter which device you're on, our site is fully responsive and stories
look beautiful on any screen.`,
    },
    {
      img: noLimit,
      title: "No Photo Upload Limit",
      para: `Our tool has no limits on uploads or bandwidth. Freely upload in bulk and share 
all of your stories in one go.`,
    },
    {
      img: embed,
      title: "Available",
      para: `Embed tweets, Facebook posts, Instagram media, Vimeo or Youtube videos, Google maps,
and more.`,
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

      <div className="info-comp-list">
        {info.map((info, index) => (
          <InfoComp
            key={index}
            img={info.img}
            title={info.title}
            para={info.para}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;

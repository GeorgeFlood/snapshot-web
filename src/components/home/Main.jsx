import InfoComp from "../stories/InfoComp";

import responsive from "../../assets/features/desktop/responsive.svg";
import noLimit from "../../assets/features/desktop/no-limit.svg";
import embed from "../../assets/features/desktop/embed.svg";
import custom from "../../assets/features/desktop/custom-domain.svg";
import boost from "../../assets/features/desktop/boost-exposure.svg";
import drag from "../../assets/features/desktop/drag-drop.svg";

const Main = () => {
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
    {
      img: custom,
      title: "Custom Domain",
      para: "With Photosnap subscriptions you can host your stories on your own domain. You can also remove our branding!",
    },
    {
      img: boost,
      title: "Boost Your Exposure",
      para: "Users that viewed your story or gallery can easily get notifed of new and featured stories with our built in mailing list.",
    },
    {
      img: drag,
      title: "Drag & Drop Image",
      para: "Easily drag and drop your image and get beautiful shots everytime. No over the top tooling to add friction to creating stories.",
    },
  ];

  return (
    <div>
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

export default Main;

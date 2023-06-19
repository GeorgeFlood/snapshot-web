// Define smaller components to be reused
const HeaderInfo = ({ title, para, inviteColor, arrowColor }) => (
  <div className="header__info">
    <h1 className="header__info--title">{title}</h1>
    <p className="header__info--para">{para}</p>
    <InviteButton inviteColor={inviteColor} arrowColor={arrowColor} />
  </div>
);

const InviteButton = ({ inviteColor, arrowColor }) => (
  <div className={`header__info--invite ${inviteColor}`}>
    <p>GET AN INVITE</p>
    <Arrow arrowColor={arrowColor} />
  </div>
);

const Arrow = ({ arrowColor }) => (
  <svg
    className={`header__info--arrow ${arrowColor}`}
    xmlns="http://www.w3.org/2000/svg"
    width="43"
    height="14"
  >
    <g fill="none" fill-rule="evenodd" stroke="#000">
      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
    </g>
  </svg>
);

// Simplified main component
export const Header = () => (
  <div className="header">
    <div className="header__container">
      <HeaderInfo
        title="CREATE AND SHARE YOUR PHOTO STORIES"
        para="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        inviteColor="white"
        arrowColor="white"
      />
      <div className="header__img"></div>
    </div>

    <div className="header__container second-container">
      <div className="header__img"></div>
      <HeaderInfo
        title="BEAUTIFUL STORIES EVERY TIME"
        para="We provide design templates to ensure your stories look terrific. Easily add photos, text, embed maps and media from other networks. Then share your story with everyone."
        inviteColor="black"
        arrowColor="black"
      />
    </div>

    <div className="header__container third-container">
      <HeaderInfo
        title="DESIGNED FOR EVERYONE"
        para="Photosnap is a platform for photographers and visual storytellers. We make it easy to share photos, tell stories and connect with others."
        inviteColor="black"
        arrowColor="black"
      />
      <div className="header__img"></div>
    </div>
  </div>
);

export default Header;

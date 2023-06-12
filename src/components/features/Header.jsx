import arrow from "../../assets/shared/desktop/arrow.svg";

const StoryDetails = () => (
  <>
    <h4>LAST MONTH'S FEATURED STORY</h4>
    <h1>HAZY FULL MOON OF APPALACHIA</h1>
    <p className="features-header--text__credit">
      March 2nd 2020 by John Appleseed
    </p>
    <p className="features-header--text__para">
      The dissected plateau area, while not actually made up of geological
      mountains, is popularly called "mountains," especially in eastern Kentucky
      and West Virginia, and while the ridges are not high, the terrain is
      extremely rugged.
    </p>
    <div className="features-header--story">
      <p>READ STORY</p>
      <img src={arrow} alt="arrow" />
    </div>
  </>
);

const Header = () => {
  return (
    <div>
      <div className="features-header">
        <div className="features-header--text">
          <StoryDetails />
        </div>
      </div>

      <div className="mobile-features">
        <StoryDetails />
      </div>
    </div>
  );
};

export default Header;

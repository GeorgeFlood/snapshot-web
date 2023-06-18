import Navbar from "../shared/Navbar";
import Header from "./Header";
import Main from "./Main";
import BetaBanner from "../shared/BetaBanner";
import Footer from "../shared/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <BetaBanner />
      <Footer />
    </div>
  );
};

export default Home;

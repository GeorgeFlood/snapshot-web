import React from "react";
import Navbar from "../shared/Navbar";
import Header from "./Header";
import PricingContainer from "./PricingContainer";
import Banner from "../shared/BetaBanner";
import Footer from "../shared/Footer";
const Pricing = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <PricingContainer />
      <Banner />
      <Footer />
    </div>
  );
};

export default Pricing;

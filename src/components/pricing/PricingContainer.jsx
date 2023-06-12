import React, { useState } from "react";

const PricingCard = ({ plan, text, monthlyCost, isAnnual, className }) => {
  return (
    <div className={`pricing-card ${className}`}>
      <h2 className="pricing-card__plan">{plan}</h2>
      <p className="pricing-card__info">{text}</p>
      <p className="pricing-card__price">
        ${isAnnual ? (monthlyCost * 10).toFixed(0) : monthlyCost} per{" "}
        {isAnnual ? "Year" : "Month"}
      </p>
      <button className="pricing-card__btn">Pick Plan</button>
    </div>
  );
};

const PricingContainer = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const togglePricingMode = () => setIsAnnual(!isAnnual);

  return (
    <div>
      <div className="switch">
        <label>
          <span style={{ opacity: isAnnual ? "0.2" : "1" }}>Monthly</span>
          <input
            type="checkbox"
            checked={isAnnual}
            onChange={togglePricingMode}
          />
          <span className="slider round"></span>
        </label>
        <label>
          <span style={{ opacity: isAnnual ? "1" : "0.2" }}>Yearly</span>
        </label>
      </div>

      <div className="pricing-cards">
        <PricingCard
          className="pricing-card__basic"
          plan="Basic"
          text="Includes basic usage of our platform. Recommended for new and aspiring photographers."
          monthlyCost={19.0}
          isAnnual={isAnnual}
        />
        <PricingCard
          className="pricing-card__pro"
          plan="Pro"
          text="More advanced features available. Recommended for photography veterans and professionals."
          monthlyCost={39.0}
          isAnnual={isAnnual}
        />
        <PricingCard
          className="pricing-card__basic"
          plan="Business"
          text="Additional features available such as more detailed metrics. Recommended for business owners."
          monthlyCost={99.0}
          isAnnual={isAnnual}
        />
      </div>
    </div>
  );
};

export default PricingContainer;

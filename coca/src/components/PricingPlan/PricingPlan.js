import "./PricingPlan.css";
import Background from "../Background/Background";
import card from "../../images/pricing-card.svg";
import card1 from "../../images/pricing-card1.svg";
import card2 from "../../images/pricing-card2.svg";
import Header from "../Header/Header";

function PricingPlan() {
  return (
    <section className="pricing-plan">
      <Header />
      <Background />
      <div className="pricing-plan__container">
        <div className="pricing-plan__heading">
          <button className="pricing-plan__heading-button">
            Pricing plans 🤑
          </button>
          <h2 className="pricing-plan__heading-title">
            Choose a plan for a more advanced business
          </h2>
          <p className="pricing-plan__heading-subtitle">
            Annual pricing (save 20%)
          </p>
        </div>
        <div className="pricing-plan__cards">
          <img className="pricing-plan__card" alt="card" src={card} />
          <img className="pricing-plan__card-black" alt="card" src={card1} />
          <img className="pricing-plan__card" alt="card" src={card2} />
        </div>
      </div>
    </section>
  );
}

export default PricingPlan;

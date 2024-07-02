import "./PricingPlan.css";
import Background from "../Background/Background";
import card from "../../images/pricing-card.svg";
import card1 from "../../images/pricing-card1.svg";
import card2 from "../../images/pricing-card2.svg";
import Header from "../Header/Header";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";

function PricingPlan() {
  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 300,
      id: "pricing-plan",
    });

  return (
    <section className="pricing-plan" id="pricing-plan">
      <Header />
      <Background />
      <div className="pricing-plan__container">
        <div className="pricing-plan__heading">
          <animated.button
            className="pricing-plan__heading-button"
            style={useItemAnimation("translateY(300%)", 1300)}
          >
            Pricing plans 🤑
          </animated.button>
          <animated.h2
            className="pricing-plan__heading-title"
            style={useItemAnimation("translateY(50%)", 1600)}
          >
            Choose a plan for a more advanced business
          </animated.h2>
          <animated.p
            className="pricing-plan__heading-subtitle"
            style={useItemAnimation("translateY(300%)", 1900)}
          >
            Annual pricing (save 20%)
          </animated.p>
        </div>
        <div className="pricing-plan__cards">
          <animated.img
            className="pricing-plan__card"
            alt="card"
            src={card}
            style={useItemAnimation("translateY(50%)", 2200)}
          />
          <animated.img
            className="pricing-plan__card-black"
            alt="card"
            src={card1}
            style={useItemAnimation("translateY(50%)", 2500)}
          />
          <animated.img
            className="pricing-plan__card"
            alt="card"
            src={card2}
            style={useItemAnimation("translateY(50%)", 2800)}
          />
        </div>
      </div>
    </section>
  );
}

export default PricingPlan;

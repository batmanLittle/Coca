import "./PricingPlan.css";
import Background from "../Background/Background";
import card from "../../images/pricing-card.svg";
import card1 from "../../images/pricing-card1.svg";
import card2 from "../../images/pricing-card2.svg";
import Header from "../Header/Header";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";

function PricingPlan() {
  const buttonAnimation = useCustomAnimation({
    from: { transform: "translateY(300%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1300,
    duration: 300,
    id: "pricing-plan",
  });
  const titleAnimation = useCustomAnimation({
    from: { transform: "translateY(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1600,
    duration: 300,
    id: "pricing-plan",
  });
  const subtitleAnimation = useCustomAnimation({
    from: { transform: "translateY(300%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1900,
    duration: 300,
    id: "pricing-plan",
  });
  const cardOneAnimation = useCustomAnimation({
    from: { transform: "translateY(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 2200,
    duration: 300,
    id: "pricing-plan",
  });
  const cardTwoAnimation = useCustomAnimation({
    from: { transform: "translateY(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 2500,
    duration: 300,
    id: "pricing-plan",
  });
  const cardFreeAnimation = useCustomAnimation({
    from: { transform: "translateY(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 2800,
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
            style={buttonAnimation}
          >
            Pricing plans 🤑
          </animated.button>
          <animated.h2
            className="pricing-plan__heading-title"
            style={titleAnimation}
          >
            Choose a plan for a more advanced business
          </animated.h2>
          <animated.p
            className="pricing-plan__heading-subtitle"
            style={subtitleAnimation}
          >
            Annual pricing (save 20%)
          </animated.p>
        </div>
        <div className="pricing-plan__cards">
          <animated.img
            className="pricing-plan__card"
            alt="card"
            src={card}
            style={cardOneAnimation}
          />
          <animated.img
            className="pricing-plan__card-black"
            alt="card"
            src={card1}
            style={cardTwoAnimation}
          />
          <animated.img
            className="pricing-plan__card"
            alt="card"
            src={card2}
            style={cardFreeAnimation}
          />
        </div>
      </div>
    </section>
  );
}

export default PricingPlan;

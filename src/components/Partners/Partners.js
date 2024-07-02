import "./Partners.css";
import airbnb from "../../images/Airbnb-Logo.svg";
import amazon from "../../images/Amazon-Logo.svg";
import fedEx from "../../images/FedEx-Logo.svg";
import microsoft from "../../images/Microsoft-Logo.svg";
import google from "../../images/Google-Logo.svg";
import OLA from "../../images/OLA-logo.svg";
import walmart from "../../images/Walmart-Logo.svg";
import OYO from "../../images/OYO-Logo.svg";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import { Heading } from "../Heading/Heading";

function Partners() {
  const useItemAnimation = (transform, delay, duration) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration,
      id: "partners",
    });

  const useItemRightAnimation = (delay) =>
    useCustomAnimation({
      from: { transform: "translateX(-100%)", opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 200,
      id: "partners",
    });

  const useItemLeftAnimation = (delay) =>
    useCustomAnimation({
      from: { transform: "translateX(100%)", opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 200,
      id: "partners",
    });

  return (
    <section className="partners" id="partners">
      <div className="partners__container">
        <Heading
          title="890+"
          text="some big companies that we work with, and trust us very much"
          classHeading="partners__heading"
          classTitle="partners__heading-title"
          classSubtitle="partners__heading-subtitle"
          styleTitle={useItemAnimation("translateX(-20%)", 100, 300)}
          styleSubtitle={useItemAnimation("translateX(20%)", 1900, 200)}
        />
        <ul className="partners__list">
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              style={useItemRightAnimation(300)}
              src={airbnb}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={amazon}
              style={useItemRightAnimation(500)}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={fedEx}
              style={useItemRightAnimation(700)}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={microsoft}
              style={useItemRightAnimation(900)}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={google}
              style={useItemLeftAnimation(1700)}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={OLA}
              style={useItemLeftAnimation(1500)}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={walmart}
              style={useItemLeftAnimation(1300)}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={OYO}
              style={useItemLeftAnimation(1100)}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Partners;

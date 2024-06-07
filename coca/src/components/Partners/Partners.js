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

function Partners() {
  const titleAnimation = useCustomAnimation({
    from: { transform: "translateX(-20%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 100,
    duration: 300,
    id: "partners",
  });

  const airbnbAnimation = useCustomAnimation({
    from: { transform: "translateX(-100%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 300,
    duration: 200,
    id: "partners",
  });

  const amazonAnimation = useCustomAnimation({
    from: { transform: "translateX(-100%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 500,
    duration: 200,
    id: "partners",
  });

  const fedExAnimation = useCustomAnimation({
    from: { transform: "translateX(-100%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 700,
    duration: 200,
    id: "partners",
  });

  const microsoftAnimation = useCustomAnimation({
    from: { transform: "translateX(-100%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 900,
    duration: 200,
    id: "partners",
  });

  const oyoAnimation = useCustomAnimation({
    from: { transform: "translateX(100%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1100,
    duration: 200,
    id: "partners",
  });

  const walmartAnimation = useCustomAnimation({
    from: { transform: "translateX(100%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1300,
    duration: 200,
    id: "partners",
  });

  const olaAnimation = useCustomAnimation({
    from: { transform: "translateX(100%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1500,
    duration: 200,
    id: "partners",
  });

  const googleAnimation = useCustomAnimation({
    from: { transform: "translateX(100%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1700,
    duration: 200,
    id: "partners",
  });

  const subtitleAnimation = useCustomAnimation({
    from: { transform: "translateX(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1900,
    duration: 200,
    id: "partners",
  });

  return (
    <section className="partners" id="partners">
      <div className="partners__container">
        <div className="partners__heading">
          <animated.h2
            className="partners__heading-title"
            style={titleAnimation}
          >
            890+
          </animated.h2>
          <animated.p
            className="partners__heading-subtitle"
            style={subtitleAnimation}
          >
            some big companies that we work with, and trust us very much
          </animated.p>
        </div>
        <ul className="partners__list">
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              style={airbnbAnimation}
              src={airbnb}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={amazon}
              style={amazonAnimation}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={fedEx}
              style={fedExAnimation}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={microsoft}
              style={microsoftAnimation}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={google}
              style={googleAnimation}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={OLA}
              style={olaAnimation}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={walmart}
              style={walmartAnimation}
            />
          </li>
          <li className="partners__item">
            <animated.img
              className="partners__item-img"
              alt="logo"
              src={OYO}
              style={oyoAnimation}
            />
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Partners;

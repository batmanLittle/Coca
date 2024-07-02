import "./Functions.css";
import icon from "../../images/functions-Icon.png";
import icon1 from "../../images/functions-Icon (1).png";
import icon2 from "../../images/functions-Icon (2).png";
import icon3 from "../../images/functions-Icon (3).png";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import { Heading } from "../Heading/Heading";

function Functions() {
  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 600,
      id: "functions",
    });

  return (
    <section className="functions" id="functions">
      <div className="functions__container">
        <Heading
          title=" Coca help our client solve complex customer problems with date that
            does more."
          text="Our platform offers the modern enterprise full control of how date
            can be access and used with industry leading software solutions for
            identity, activation, and date collaboration"
          classTitle="functions__heading-title"
          classSubtitle="functions__heading-subtitle"
          styleTitle={useItemAnimation("translateX(-20%)", 200)}
          styleSubtitle={useItemAnimation("translateX(-20%)", 500)}
        />
        <ul className="functions__list">
          <animated.li
            className="functions__item"
            style={useItemAnimation("translateX(-50%)", 900)}
          >
            <img src={icon} alt="Icon" className="functions__item-img" />
            <h3 className="functions__item-title">
              Build your date fundamental
            </h3>
            <p className="functions__item-subtitle">
              Build access to date, develop valuable business insights and drive
              revenue while maintaining full control over access and use of date
              at all times.
            </p>
          </animated.li>
          <animated.li
            className="functions__item"
            style={useItemAnimation("translateX(50%)", 1600)}
          >
            <img src={icon1} alt="Icon" className="functions__item-img" />
            <h3 className="functions__item-title">Measure more effective</h3>
            <p className="functions__item-subtitle">
              Effectively measure people-based campaigns with the freedom to
              choose from best-of breed partners to optimize and drive media
              innovation.
            </p>
          </animated.li>
          <animated.li
            className="functions__item"
            style={useItemAnimation("translateX(-50%)", 1300)}
          >
            <img src={icon2} alt="icon" className="functions__item-img" />
            <h3 className="functions__item-title">Activate your date</h3>
            <p className="functions__item-subtitle">
              Accurately address your specific audiences at scale across any
              channel, platform, publisher or network and safely translate date
              between identity space to improve results.
            </p>
          </animated.li>
          <animated.li
            className="functions__item"
            style={useItemAnimation("translateX(50%)", 1900)}
          >
            <img src={icon3} alt="icon" className="functions__item-img" />
            <h3 className="functions__item-title">
              Strengthen consumer privacy
            </h3>
            <p className="functions__item-subtitle">
              Protect your customer date with leading privacy-preserving
              technologies and advanced techniques to minimize date movement
              while still enabling insight generation.
            </p>
          </animated.li>
        </ul>
      </div>
    </section>
  );
}

export default Functions;

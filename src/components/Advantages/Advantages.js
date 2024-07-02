import "./Advantages.css";
import imageWork from "../../images/advantages-image.png";
import icon from "../../images/advantages-icon.png";
import imageGraphs from "../../images/advantages-graphs.svg";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import { Heading } from "../Heading/Heading";

function Advantages() {
  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 600,
      id: "advantages",
    });

  return (
    <section className="advantages" id="advantages">
      <div className="advantages__container">
        <animated.div
          className="advantages__img"
          style={useItemAnimation("translateX(-50%)", 100)}
        >
          <img
            src={imageWork}
            alt="working on a laptop"
            className="advantages__img-work"
          />
          <img
            src={imageGraphs}
            alt="graphs"
            className="advantages__img-graphs"
          />
        </animated.div>
        <div className="advantages__info">
          <Heading
            title=" Passion to increase company revenue up to 85%"
            text="Automate your sales, marketing and service in one platform. Avoid date leaks and enable consistent messaging"
            classHeading="advantages__heading"
            classTitle="advantages__heading-title"
            classSubtitle="advantages__heading-subtitle"
            styleTitle={useItemAnimation("translateX(50%)", 1200)}
            styleSubtitle={useItemAnimation("translateX(50%)", 900)}
          />
          <animated.ul
            className="advantages__list"
            style={useItemAnimation("translateX(50%)", 500)}
          >
            <li className="advantages__item">
              <img src={icon} alt="icon" className="advantages__item-icon" />
              <p className="advantages__item-text">
                Close more deals with single - page contact managment
              </p>
            </li>
            <li className="advantages__item">
              <img src={icon} alt="icon" className="advantages__item-icon" />
              <p className="advantages__item-text">
                Enjoy one-click calling, call scripts and voicemail automation
              </p>
            </li>
            <li className="advantages__item">
              <img src={icon} alt="icon" className="advantages__item-icon" />
              <p className="advantages__item-text">
                Take stages and milestones of your deals to keep the sales
                process an track
              </p>
            </li>
          </animated.ul>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

import "./Advantages.css";
import imageWork from "../../images/advantages-image.png";
import icon from "../../images/advantages-icon.png";
import imageGraphs from "../../images/advantages-graphs.svg";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import { Heading } from "../Heading/Heading";

function Advantages() {
  const imgAnimation = useCustomAnimation({
    from: { transform: "translateX(-50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 100,
    duration: 600,
    id: "advantages",
  });

  const titleAnimation = useCustomAnimation({
    from: { transform: "translateX(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1200,
    duration: 600,
    id: "advantages",
  });

  const subtitleAnimation = useCustomAnimation({
    from: { transform: "translateX(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 900,
    duration: 600,
    id: "advantages",
  });

  const listAnimation = useCustomAnimation({
    from: { transform: "translateX(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 500,
    duration: 600,
    id: "advantages",
  });

  return (
    <section className="advantages" id="advantages">
      <div className="advantages__container">
        <animated.div className="advantages__img" style={imgAnimation}>
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
            styleTitle={titleAnimation}
            styleSubtitle={subtitleAnimation}
          />
          <animated.ul className="advantages__list" style={listAnimation}>
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

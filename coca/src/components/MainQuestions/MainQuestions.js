import "./MainQuestions.css";
import coffeeBreak from "../../images/coffee-break.svg";
import presentation from "../../images/presentation.svg";
import workBreak from "../../images/work-break-MainQuestions.svg";
import workZone from "../../images/work-zone.svg";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";

function MainQuestions() {
  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 800,
      id: "main-questions",
    });

  return (
    <section className="main-questions" id="main-questions">
      <div className="main-questions__container">
        <ul className="main-questions__list">
          <animated.li
            className="main-questions__item"
            style={useItemAnimation("translateX(-50%)", 100)}
          >
            <img
              src={workZone}
              alt="work-zone"
              className="main-questions__img"
            />
            <p className="main-questions__title">
              How we perform long-running tasks using AWS services
            </p>
            <p className="main-questions__subtitle">
              Webflow is web design tool as well as a hosting platform and CMS
              all in one. While you are probably familiar with all of these,
              they are usually entirely separate tools.
            </p>
          </animated.li>
          <animated.li
            className="main-questions__item"
            style={useItemAnimation("translateX(50%)", 600)}
          >
            <img
              src={workBreak}
              alt="work-break"
              className="main-questions__img"
            />
            <p className="main-questions__title">
              How we perform long-running tasks using AWS services
            </p>
            <p className="main-questions__subtitle">
              Webflow is web design tool as well as a hosting platform and CMS
              all in one. While you are probably familiar with all of these,
              they are usually entirely separate tools.
            </p>
          </animated.li>
          <animated.li
            className="main-questions__item"
            style={useItemAnimation("translateX(-50%)", 1100)}
          >
            <img
              src={coffeeBreak}
              alt="coffee-break"
              className="main-questions__img"
            />
            <p className="main-questions__title">
              How we perform long-running tasks using AWS services
            </p>
            <p className="main-questions__subtitle">
              Webflow is web design tool as well as a hosting platform and CMS
              all in one. While you are probably familiar with all of these,
              they are usually entirely separate tools.
            </p>
          </animated.li>
          <animated.li
            className="main-questions__item nth-child"
            style={useItemAnimation("translateX(50%)", 1400)}
          >
            <img
              src={presentation}
              alt="presentation"
              className="main-questions__img"
            />
            <p className="main-questions__title">
              How we perform long-running tasks using AWS services
            </p>
            <p className="main-questions__subtitle">
              Webflow is web design tool as well as a hosting platform and CMS
              all in one. While you are probably familiar with all of these,
              they are usually entirely separate tools.
            </p>
          </animated.li>
        </ul>
      </div>
    </section>
  );
}

export default MainQuestions;

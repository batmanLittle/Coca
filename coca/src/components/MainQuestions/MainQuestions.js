import "./MainQuestions.css";
import coffeeBreak from "../../images/coffee-break.svg";
import presentation from "../../images/presentation.svg";
import workBreak from "../../images/work-break-MainQuestions.svg";
import workZone from "../../images/work-zone.svg";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";

function MainQuestions() {
  const cardOneAnimation = useCustomAnimation({
    from: { transform: "translateX(-50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 100,
    duration: 800,
    id: "main-questions",
  });

  const cardTwoAnimation = useCustomAnimation({
    from: { transform: "translateX(-50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 400,
    duration: 800,
    id: "main-questions",
  });

  const cardFreeAnimation = useCustomAnimation({
    from: { transform: "translateX(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1100,
    duration: 800,
    id: "main-questions",
  });

  const cardFourAnimation = useCustomAnimation({
    from: { transform: "translateX(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1400,
    duration: 800,
    id: "main-questions",
  });

  return (
    <section className="main-questions" id="main-questions">
      <div className="main-questions__container">
        <ul className="main-questions__list">
          <animated.li
            className="main-questions__item"
            style={cardOneAnimation}
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
            style={cardFreeAnimation}
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
            style={cardTwoAnimation}
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
            style={cardFourAnimation}
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

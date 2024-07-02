import "./Questions.css";
import { Heading } from "../Heading/Heading";
import minus from "../../images/Icon-minus.svg";
import plus from "../../images/Icon-plus.svg";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";

function Questions() {
  const titleAnimation = useCustomAnimation({
    from: { transform: "translateY(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 500,
    duration: 300,
    id: "questions",
  });
  const subtitleAnimation = useCustomAnimation({
    from: { transform: "translateY(300%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 800,
    duration: 300,
    id: "questions",
  });

  const useItemAnimation = (delay) =>
    useCustomAnimation({
      from: { transform: "translateY(300%)", opacity: "0" },
      to: { transform: "translateY(0%)", opacity: "1" },
      delay,
      duration: 300,
      id: "questions",
    });

  return (
    <section className="questions" id="questions">
      <div className="questions__container">
        <Heading
          title="Frequently asked questions"
          text="Everything you need to know about the product and billing."
          classHeading="news__heading"
          classTitle="news__heading-title"
          classSubtitle="news__heading-subtitle"
          styleTitle={titleAnimation}
          styleSubtitle={subtitleAnimation}
        />
        <ul className="questions__list">
          <animated.li
            className="questions__item"
            style={useItemAnimation(1100)}
          >
            <div className="questions__item-heading">
              <p className="questions__item-title">
                Is there a free trial available?
              </p>
              <p className="questions__item-subtitle">
                Yes, you can try us for free for 30 days. If you want, we’ll
                provide you with a free, personalized 30-minute onboarding call
                to get you up and running as soon as possible.
              </p>
            </div>
            <img alt="minus" src={minus} className="questions__item-icon" />
          </animated.li>

          <animated.li
            className="questions__item"
            style={useItemAnimation(1400)}
          >
            <p className="questions__item-title">
              How Can I Add More Emails To My Account?
            </p>
            <img alt="plus" src={plus} className="questions__item-icon" />
          </animated.li>

          <animated.li
            className="questions__item"
            style={useItemAnimation(1700)}
          >
            <p className="questions__item-title">
              Can I Change Plans Or Cancel My Subscription At Any Time
            </p>
            <img alt="plus" src={plus} className="questions__item-icon" />
          </animated.li>

          <animated.li
            className="questions__item"
            style={useItemAnimation(2000)}
          >
            <p className="questions__item-title">
              How Secure Is My Date With Sans CRM
            </p>
            <img alt="plus" src={plus} className="questions__item-icon" />
          </animated.li>

          <animated.li
            className="questions__item"
            style={useItemAnimation(2300)}
          >
            <p className="questions__item-title">
              What Is The Uptime Guarantee
            </p>
            <img alt="plus" src={plus} className="questions__item-icon" />
          </animated.li>
        </ul>
      </div>
    </section>
  );
}

export default Questions;

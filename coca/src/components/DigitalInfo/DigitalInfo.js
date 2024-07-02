import "./DigitalInfo.css";
import graphs from "../../images/graphs.png";
import Header from "../Header/Header";
import Background from "../Background/Background";
import { animated } from "react-spring";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import Button from "../Button/Button";

function DigitalInfo() {
  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 400,
      id: "digital-info",
    });

  return (
    <section className="digital-info" id="digital-info">
      <Header />
      <Background />
      <div className="digital-info__container">
        <div className="digital-info__block">
          <animated.div style={useItemAnimation("translateX(-50%)", 1500)}>
            <h1 className="digital-info__title">Digitally forward creative</h1>
            <p className="digital-info__subtitle">
              When it comes to interactive marketing, we've got you covered. Be
              where the world is going
            </p>
          </animated.div>
          <animated.form
            className="digital-info__form"
            style={useItemAnimation("translateX(-50%)", 2100)}
          >
            <input
              type="email"
              className="digital-info__input"
              placeholder="Enter your email"
            ></input>
            <Button text={"Try for free"} />
          </animated.form>
        </div>
        <animated.div
          style={useItemAnimation("translateX(50%)", 1800)}
          className="digital-info__img"
        >
          <img className="digital-info__img" src={graphs} alt="graphs" />
        </animated.div>
      </div>
    </section>
  );
}

export default DigitalInfo;

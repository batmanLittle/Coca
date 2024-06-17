import "./DigitalInfo.css";
import graphs from "../../images/graphs.png";
import Header from "../Header/Header";
import Background from "../Background/Background";
import { animated } from "react-spring";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import Button from "../Button/Button";

function DigitalInfo() {
  const FormAnimation = useCustomAnimation({
    from: { transform: "translateX(-50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 2100,
    duration: 400,
    id: "digital-info",
  });

  const DigitalAnimation = useCustomAnimation({
    from: { transform: "translateX(-50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1500,
    duration: 400,
    id: "digital-info",
  });

  const GraphsAnimation = useCustomAnimation({
    from: {
      transform: "translateX(50%)",
      opacity: "0",
    },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1800,
    duration: 400,
    id: "digital-info",
  });

  return (
    <section className="digital-info" id="digital-info">
      <Header />
      <Background />
      <div className="digital-info__container">
        <div className="digital-info__block">
          <animated.div style={DigitalAnimation}>
            <h1 className="digital-info__title">Digitally forward creative</h1>
            <p className="digital-info__subtitle">
              When it comes to interactive marketing, we've got you covered. Be
              where the world is going
            </p>
          </animated.div>
          <animated.form className="digital-info__form" style={FormAnimation}>
            <input
              type="email"
              className="digital-info__input"
              placeholder="Enter your email"
            ></input>
            <Button text={"Try for free"} />
          </animated.form>
        </div>
        <animated.div style={GraphsAnimation} className="digital-info__img">
          <img className="digital-info__img" src={graphs} alt="graphs" />
        </animated.div>
      </div>
    </section>
  );
}

export default DigitalInfo;

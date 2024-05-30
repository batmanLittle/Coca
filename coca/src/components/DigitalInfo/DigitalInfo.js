import "./DigitalInfo.css";
import graphs from "../../images/graphs.png";
import Header from "../Header/Header";
import Background from "../Background/Background";
import { animated } from "react-spring";

function DigitalInfo({
  menuAnimation,
  logoAnimation,
  DigitalAnimation,
  GraphsAnimation,
  FormAnimation,
}) {
  return (
    <section className="digital-info">
      <Header logoAnimation={logoAnimation} menuAnimation={menuAnimation} />
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
            <button className="digital-info__button">Try for free</button>
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

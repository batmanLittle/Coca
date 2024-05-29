import "./DigitalInfo.css";
import graphs from "../../images/graphs.png";
import Header from "../Header/Header";
import Background from "../Background/Background";

function DigitalInfo() {
  return (
    <section className="digital-info">
      <Header />
      <Background />
      <div className="digital-info__container">
        <div className="digital-info__block">
          <h1 className="digital-info__title">Digitally forward creative</h1>
          <p className="digital-info__subtitle">
            When it comes to interactive marketing, we've got you covered. Be
            where the world is going
          </p>

          <form className="digital-info__form">
            <input
              type="email"
              className="digital-info__input"
              placeholder="Enter your email"
            ></input>
            <button className="digital-info__button">Try for free</button>
          </form>
        </div>
        <img className="digital-info__img" src={graphs} alt="graphs" />
      </div>
    </section>
  );
}

export default DigitalInfo;

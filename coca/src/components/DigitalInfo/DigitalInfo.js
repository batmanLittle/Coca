import "./DigitalInfo.css";
import orange from "../../images/bacground-orange.png";
import green from "../../images/bacground-green.png";

function DigitalInfo() {
  return (
    <section className="digital-info">
      <div className="digital-info__container">
        <img className="digital__img-orange" src={orange} alt="background" />
        <img className="digital__img-green" src={green} alt="background" />
      </div>
    </section>
  );
}

export default DigitalInfo;

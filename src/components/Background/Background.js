import "./Background.css";
import orange from "../../images/bacground-orange.png";
import green from "../../images/bacground-green.png";

function Background() {
  return (
    <div className="background">
      <img className="background-orange" src={orange} alt="background" />
      <img className="background-green" src={green} alt="background" />
    </div>
  );
}

export default Background;

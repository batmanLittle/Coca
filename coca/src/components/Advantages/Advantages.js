import "./Advantages.css";
import imageWork from "../../images/advantages-image.png";
import icon from "../../images/advantages-icon.png";
import imageGraphs from "../../images/advantages-graphs.svg";

function Advantages() {
  return (
    <section className="advantages">
      <div className="advantages__container">
        <div className="advantages__img">
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
        </div>
        <div className="advantages__info">
          <div className="advantages__heading">
            <h2 className="advantages__heading-title">
              Passion to increase company revenue up to 85%
            </h2>
            <p className="advantages__heading-subtitle">
              Automate your sales, marketing and service in one platform. Avoid
              date leaks and enable consistent messaging
            </p>
          </div>
          <ul className="advantages__list">
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
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Advantages;

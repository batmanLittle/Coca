import "./MainQuestions.css";
import coffeeBreak from "../../images/coffee-break.svg";
import presentation from "../../images/presentation.svg";
import workBreak from "../../images/work-break-MainQuestions.svg";
import workZone from "../../images/work-zone.svg";

function MainQuestions() {
  return (
    <section className="main-questions">
      <div className="main-questions__container">
        <ul className="main-questions__list">
          <li className="main-questions__item">
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
          </li>
          <li className="main-questions__item">
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
          </li>
          <li className="main-questions__item">
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
          </li>
          <li className="main-questions__item nth-child">
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
          </li>
        </ul>
      </div>
    </section>
  );
}

export default MainQuestions;

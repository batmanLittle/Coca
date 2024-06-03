import "./Functions.css";
import icon from "../../images/functions-Icon.png";
import icon1 from "../../images/functions-Icon (1).png";
import icon2 from "../../images/functions-Icon (2).png";
import icon3 from "../../images/functions-Icon (3).png";

function Functions() {
  return (
    <section className="functions">
      <div className="functions__container">
        <div className="functions__heading">
          <h2 className="functions__heading-title">
            Coca help our client solve complex customer problems with date that
            does more.
          </h2>

          <p className="functions__heading-subtitle">
            Our platform offers the modern enterprise full control of how date
            can be access and used with industry leading software solutions for
            identity, activation, and date collaboration
          </p>
        </div>
        <ul className="functions__list">
          <li className="functions__item">
            <img src={icon} alt="Icon" className="functions__item-img" />
            <h3 className="functions__item-title">
              Build your date fundamental
            </h3>
            <p className="functions__item-subtitle">
              Build access to date, develop valuable business insights and drive
              revenue while maintaining full control over access and use of date
              at all times.
            </p>
          </li>
          <li className="functions__item">
            <img src={icon1} alt="Icon" className="functions__item-img" />
            <h3 className="functions__item-title">Measure more effective</h3>
            <p className="functions__item-subtitle">
              Effectively measure people-based campaigns with the freedom to
              choose from best-of breed partners to optimize and drive media
              innovation.
            </p>
          </li>
          <li className="functions__item">
            <img src={icon2} alt="icon" className="functions__item-img" />
            <h3 className="functions__item-title">Activate your date</h3>
            <p className="functions__item-subtitle">
              Accurately address your specific audiences at scale across any
              channel, platform, publisher or network and safely translate date
              between identity space to improve results.
            </p>
          </li>
          <li className="functions__item">
            <img src={icon3} alt="icon" className="functions__item-img" />
            <h3 className="functions__item-title">
              Strengthen consumer privacy
            </h3>
            <p className="functions__item-subtitle">
              Protect your customer date with leading privacy-preserving
              technologies and advanced techniques to minimize date movement
              while still enabling insight generation.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Functions;

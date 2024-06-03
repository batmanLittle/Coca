import "./Statistics.css";
import team from "../../images/statistics-image.svg";

function Statistics() {
  return (
    <section className="statistics">
      <div className="statistics__container">
        <ul className="statistics__list">
          <li className="statistics__item">
            <h3 className="statistics__item-title">17k</h3>
            <p className="statistics__item-subtitle">
              happy customers on worldwide
            </p>
          </li>
          <li className="statistics__separator"></li>
          <li className="statistics__item">
            <h3 className="statistics__item-title">15+</h3>
            <p className="statistics__item-subtitle">
              Hours of work experience
            </p>
          </li>
          <li className="statistics__separator"></li>
          <li className="statistics__item">
            <h3 className="statistics__item-title">50+</h3>
            <p className="statistics__item-subtitle">
              Creativity & passionate members
            </p>
          </li>
          <li className="statistics__separator"></li>
          <li className="statistics__item">
            <h3 className="statistics__item-title">100+</h3>
            <p className="statistics__item-subtitle">
              Integrations lorem ipsum integrations
            </p>
          </li>
        </ul>
        <img src={team} alt="team" />
        <div className="statistics__heading">
          <h2 className="statistics__heading-title">
            Lift your business to new heights with our digital marketing
            services
          </h2>
          <p className="statistics__heading-subtitle">
            To build software that gives customer facing teams in small and
            medium-sized businesses the ability to create rewarding and
            long-lasting relationships with customers
          </p>
        </div>
      </div>
    </section>
  );
}

export default Statistics;

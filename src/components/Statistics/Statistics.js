import "./Statistics.css";
import team from "../../images/statistics-image.svg";
import { useEffect, useState } from "react";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import { Heading } from "../Heading/Heading";

function Statistics() {
  const [width, setWidth] = useState(window.innerWidth);

  const useItemAnimation = (transform, delay, duration) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration,
      id: "statistics",
    });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="statistics" id="statistics">
      <div className="statistics__container">
        <ul className="statistics__list">
          <animated.li
            className="statistics__item"
            style={useItemAnimation("translateX(-70%)", 500, 150)}
          >
            <h3 className="statistics__item-title">17k</h3>
            <p className="statistics__item-subtitle">
              happy customers on worldwide
            </p>
          </animated.li>
          <animated.li
            className="statistics__separator"
            style={useItemAnimation("translateX(-70%)", 600, 150)}
          ></animated.li>
          <animated.li
            className="statistics__item"
            style={useItemAnimation("translateX(-70%)", 600, 150)}
          >
            <h3 className="statistics__item-title">15+</h3>
            <p className="statistics__item-subtitle">
              Hours of work experience
            </p>
          </animated.li>
          <animated.li
            style={useItemAnimation("translateX(-70%)", 700, 150)}
            className={width > 950 ? "statistics__separator" : "display-none"}
          ></animated.li>
          <animated.li
            className="statistics__item"
            style={useItemAnimation("translateX(-70%)", 700, 150)}
          >
            <h3 className="statistics__item-title">50+</h3>
            <p className="statistics__item-subtitle">
              Creativity & passionate members
            </p>
          </animated.li>
          <animated.li
            className="statistics__separator"
            style={useItemAnimation("translateX(-70%)", 800, 150)}
          ></animated.li>
          <animated.li
            className="statistics__item"
            style={useItemAnimation("translateX(-70%)", 800, 150)}
          >
            <h3 className="statistics__item-title">100+</h3>
            <p className="statistics__item-subtitle">
              Integrations lorem ipsum integrations
            </p>
          </animated.li>
        </ul>
        <animated.img
          className="statistics__img"
          src={team}
          alt="team"
          style={useItemAnimation("translateX(-10%)", 100, 400)}
        />
        <Heading
          title="Lift your business to new heights with our digital marketing services"
          text="To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers"
          classHeading="statistics__heading"
          classTitle="statistics__heading-title"
          classSubtitle="statistics__heading-subtitle"
          styleTitle={useItemAnimation("translateY(70%)", 1300, 400)}
          styleSubtitle={useItemAnimation("translateY(70%)", 1000, 400)}
        />
      </div>
    </section>
  );
}

export default Statistics;

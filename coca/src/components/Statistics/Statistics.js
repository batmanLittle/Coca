import "./Statistics.css";
import team from "../../images/statistics-image.svg";
import { useEffect, useState } from "react";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import { Heading } from "../Heading/Heading";

function Statistics() {
  const [width, setWidth] = useState(window.innerWidth);

  const imgAnimation = useCustomAnimation({
    from: { transform: "translateY(-10%)", opacity: "0" },
    to: { transform: "translateY(0%)", opacity: "1" },
    delay: 100,
    duration: 400,
    id: "statistics",
  });

  const itemOneAnimation = useCustomAnimation({
    from: { transform: "translateX(-70%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 500,
    duration: 150,
    id: "statistics",
  });
  const itemTwoAnimation = useCustomAnimation({
    from: { transform: "translateX(-70%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 600,
    duration: 150,
    id: "statistics",
  });
  const itemFreeAnimation = useCustomAnimation({
    from: { transform: "translateX(-70%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 700,
    duration: 150,
    id: "statistics",
  });
  const itemFourAnimation = useCustomAnimation({
    from: { transform: "translateX(-70%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 800,
    duration: 150,
    id: "statistics",
  });

  const titleAnimation = useCustomAnimation({
    from: { transform: "translateY(70%)", opacity: "0" },
    to: { transform: "translateY(0%)", opacity: "1" },
    delay: 1300,
    duration: 400,
    id: "statistics",
  });

  const subtitleAnimation = useCustomAnimation({
    from: { transform: "translateY(70%)", opacity: "0" },
    to: { transform: "translateY(0%)", opacity: "1" },
    delay: 1000,
    duration: 400,
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
          <animated.li className="statistics__item" style={itemOneAnimation}>
            <h3 className="statistics__item-title">17k</h3>
            <p className="statistics__item-subtitle">
              happy customers on worldwide
            </p>
          </animated.li>
          <animated.li
            className="statistics__separator"
            style={itemTwoAnimation}
          ></animated.li>
          <animated.li className="statistics__item" style={itemTwoAnimation}>
            <h3 className="statistics__item-title">15+</h3>
            <p className="statistics__item-subtitle">
              Hours of work experience
            </p>
          </animated.li>
          <animated.li
            style={itemFreeAnimation}
            className={width > 950 ? "statistics__separator" : "display-none"}
          ></animated.li>
          <animated.li className="statistics__item" style={itemFreeAnimation}>
            <h3 className="statistics__item-title">50+</h3>
            <p className="statistics__item-subtitle">
              Creativity & passionate members
            </p>
          </animated.li>
          <animated.li
            className="statistics__separator"
            style={itemFourAnimation}
          ></animated.li>
          <animated.li className="statistics__item" style={itemFourAnimation}>
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
          style={imgAnimation}
        />
        <Heading
          title="Lift your business to new heights with our digital marketing services"
          text="To build software that gives customer facing teams in small and medium-sized businesses the ability to create rewarding and long-lasting relationships with customers"
          classHeading="statistics__heading"
          classTitle="statistics__heading-title"
          classSubtitle="statistics__heading-subtitle"
          styleTitle={titleAnimation}
          styleSubtitle={subtitleAnimation}
        />
      </div>
    </section>
  );
}

export default Statistics;

import "./Development.css";
import useCustomAnimation from "../../hooks/useScrollAnimation";
import { animated } from "react-spring";
import work from "../../images/development-work.svg";
import smile from "../../images/icon-smile.svg";
import team from "../../images/development-team.svg";
import graph from "../../images/icon-graph.svg";
import workTeam from "../../images/development-work-team.svg";
import group from "../../images/icon-group.svg";
import chill from "../../images/development-chill.svg";
import graph2 from "../../images/icon-graph2.svg";
import { Heading } from "../Heading/Heading";

function Development() {
  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
      duration: 600,
      id: "development",
    });

  return (
    <section className="development" id="development">
      <div className="development__section">
        <Heading
          title=" Advertise, analyze, and optimize! We do it all for you"
          text="Build more meaningful and lasting relationships - better understand
            their needs, identify new opportunities to help address any problems
            faster"
          classHeading="development__heading"
          classTitle="development__heading-title"
          classSubtitle="development__heading-subtitle"
          styleTitle={useItemAnimation("translateX(-20%)", 100)}
          styleSubtitle={useItemAnimation("translateX(-20%)", 500)}
        />
        <ul className="development__list">
          <animated.li
            className="development__item"
            style={useItemAnimation("translateX(-50%)", 900)}
          >
            <div className="development__item-images">
              <img className="development__item-img" src={work} alt="work" />
              <img className="development__item-icon" src={smile} alt="smile" />
            </div>
            <div className="development__item-heading">
              <h3 className="development__item-title">
                Lead happiness for customers
              </h3>
              <p className="development__item-subtitle">
                Build more meaningful and lasting relationships - better
                understand their needs, identify new opportunities to help
                address any problems faster
              </p>
            </div>
          </animated.li>

          <animated.li
            className="development__item"
            style={useItemAnimation("translateX(50%)", 1500)}
          >
            <div className="development__item-images">
              <img className="development__item-img" src={team} alt="team" />
              <img className="development__item-icon" src={graph} alt="graph" />
            </div>
            <div className="development__item-heading">
              <h3 className="development__item-title">
                Mutually support each other
              </h3>
              <p className="development__item-subtitle">
                Build more meaningful and lasting relationships - better
                understand their needs, identify new opportunities to help
                address any problems faster
              </p>
            </div>
          </animated.li>

          <animated.li
            className="development__item"
            style={useItemAnimation("translateX(-50%)", 1200)}
          >
            <div className="development__item-images">
              <img
                className="development__item-img"
                src={workTeam}
                alt="work-team"
              />
              <img className="development__item-icon" src={group} alt="group" />
            </div>
            <div className="development__item-heading">
              <h3 className="development__item-title">
                Have fun growing together
              </h3>
              <p className="development__item-subtitle">
                Build more meaningful and lasting relationships - better
                understand their needs, identify new opportunities to help
                address any problems faster
              </p>
            </div>
          </animated.li>

          <animated.li
            className="development__item"
            style={useItemAnimation("translateX(50%)", 1800)}
          >
            <div className="development__item-images">
              <img className="development__item-img" src={chill} alt="chill" />
              <img
                className="development__item-icon"
                src={graph2}
                alt="graph"
              />
            </div>
            <div className="development__item-heading">
              <h3 className="development__item-title">
                Make Your Business Grow
              </h3>
              <p className="development__item-subtitle">
                Build more meaningful and lasting relationships - better
                understand their needs, identify new opportunities to help
                address any problems faster
              </p>
            </div>
          </animated.li>
        </ul>
      </div>
    </section>
  );
}

export default Development;

import "./HeadingMain.css";
import { animated } from "react-spring";

export const HeadingMain = ({
  title,
  text,
  classTitle,
  classHeading,
  classSubtitle,
  styleHeading,
  styleTitle,
  styleSubtitle,
}) => {
  return (
    <animated.div
      className={`${classHeading} heading-main`}
      style={styleHeading}
    >
      <animated.h1
        className={`${classTitle} heading-main-title`}
        style={styleTitle}
      >
        {title}
      </animated.h1>
      <animated.p
        className={`${classSubtitle} heading-main-subtitle`}
        style={styleSubtitle}
      >
        {text}
      </animated.p>
    </animated.div>
  );
};

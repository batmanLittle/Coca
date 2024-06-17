import "./Heading.css";
import { animated } from "react-spring";

export const Heading = ({
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
    <animated.div className={`${classHeading} heading`} style={styleHeading}>
      <animated.h2 className={`${classTitle} heading-title`} style={styleTitle}>
        {title}
      </animated.h2>
      <animated.p
        className={`${classSubtitle} heading-subtitle`}
        style={styleSubtitle}
      >
        {text}
      </animated.p>
    </animated.div>
  );
};

export const Heading1 = ({
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
    <animated.div className={`${classHeading} heading`} style={styleHeading}>
      <animated.h2 className={`${classTitle} heading-title`} style={styleTitle}>
        {title}
      </animated.h2>
      <animated.p
        className={`${classSubtitle} heading-subtitle`}
        style={styleSubtitle}
      >
        {text}
      </animated.p>
    </animated.div>
  );
};

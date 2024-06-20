import "./Ideas.css";
import { Heading } from "../Heading/Heading";
import { animated } from "react-spring";
import useCustomAnimation from "../../hooks/useScrollAnimation";

function Ideas() {
  const titleAnimation = useCustomAnimation({
    from: { transform: "translateX(-50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 200,
    duration: 400,
    id: "ideas",
  });

  const subtitleAnimation = useCustomAnimation({
    from: { transform: "translateX(50%)", opacity: "0" },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 500,
    duration: 400,
    id: "ideas",
  });

  return (
    <section className="ideas" id="ideas">
      <div className="ideas__container">
        <Heading
          title=" Powerful ideas & sales acceleration"
          text="We are a software development firm specializing in digital products. We build beautiful, functional and cross-platform solutions that are accessible to all."
          classTitle="ideas__heading-title"
          classSubtitle="ideas__heading-subtitle"
          classHeading="ideas__heading"
          styleTitle={titleAnimation}
          styleSubtitle={subtitleAnimation}
        />
      </div>
    </section>
  );
}

export default Ideas;

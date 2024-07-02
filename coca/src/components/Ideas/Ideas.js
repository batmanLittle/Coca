import "./Ideas.css";
import { Heading } from "../Heading/Heading";
import useCustomAnimation from "../../hooks/useScrollAnimation";

function Ideas() {
  const useItemAnimation = (transform, delay) =>
    useCustomAnimation({
      from: { transform, opacity: "0" },
      to: { transform: "translateX(0%)", opacity: "1" },
      delay,
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
          styleTitle={useItemAnimation("translateX(-50%)", 200)}
          styleSubtitle={useItemAnimation("translateX(50%)", 500)}
        />
      </div>
    </section>
  );
}

export default Ideas;

import "./Button.css";
import { animated } from "react-spring";

function Button({ text, styleButton, classButton }) {
  return (
    <animated.button className={`${classButton} button`} style={styleButton}>
      {text}
    </animated.button>
  );
}

export default Button;

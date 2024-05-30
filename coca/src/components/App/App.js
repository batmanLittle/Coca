import "./App.css";
import { Routes, Route } from "react-router-dom";
import DigitalInfo from "../DigitalInfo/DigitalInfo";
import Main from "../Main/Main";
import { useSpring } from "react-spring";

function App() {
  const logoAnimation = useSpring({
    from: { transform: "translateY(100%)", opacity: "0" },
    to: { transform: "translateY(0%)", opacity: "1" },
    delay: 100, // Задержка перед началом анимации
    config: {
      duration: 1000, // Длительность анимации в миллисекундах
    },
  });

  const menuAnimation = useSpring({
    from: {
      transform: "translateX(-50%)",
      opacity: "0",
    },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1000, // Задержка перед началом анимации после лого
    config: {
      duration: 400, // Длительность анимации в миллисекундах
    },
  });

  const DigitalAnimation = useSpring({
    from: {
      transform: "translateX(-50%)",
      opacity: "0",
    },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1500, // Задержка перед началом анимации после лого
    config: {
      duration: 400, // Длительность анимации в миллисекундах
    },
  });

  const FormAnimation = useSpring({
    from: {
      transform: "translateX(-50%)",
      opacity: "0",
    },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 2100, // Задержка перед началом анимации после лого
    config: {
      duration: 400, // Длительность анимации в миллисекундах
    },
  });

  const GraphsAnimation = useSpring({
    from: {
      transform: "translateX(50%)",
      opacity: "0",
    },
    to: { transform: "translateX(0%)", opacity: "1" },
    delay: 1800, // Задержка перед началом анимации после лого
    config: {
      duration: 400, // Длительность анимации в миллисекундах
    },
  });

  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DigitalInfo
                logoAnimation={logoAnimation}
                menuAnimation={menuAnimation}
                DigitalAnimation={DigitalAnimation}
                GraphsAnimation={GraphsAnimation}
                FormAnimation={FormAnimation}
              />
              <Main />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

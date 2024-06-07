import "./App.css";
import { Routes, Route } from "react-router-dom";
import DigitalInfo from "../DigitalInfo/DigitalInfo";
import Main from "../Main/Main";
import { useSpring } from "react-spring";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <DigitalInfo />
              <Main />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

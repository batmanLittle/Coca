import "./App.css";
import { Routes, Route } from "react-router-dom";
import DigitalInfo from "../DigitalInfo/DigitalInfo";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

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
              <Footer />
            </>
          }
        />

        <Route path="/about" element={<></>} />
      </Routes>
    </div>
  );
}

export default App;

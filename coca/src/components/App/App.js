import "./App.css";
import { Routes, Route } from "react-router-dom";
import DigitalInfo from "../DigitalInfo/DigitalInfo";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import HeaderAbout from "../HeaderAbout/HeaderAbout";
import Ideas from "../Ideas/Ideas";
import Team from "../Team/Team";
import HeaderBlog from "../HeaderBlog/HeaderBlog";
import MainQuestions from "../MainQuestions/MainQuestions";
import Articles from "../Articles/Articles";
import PricingPlan from "../PricingPlan/PricingPlan";
import Questions from "../Questions/Questions";

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

        <Route
          path="/about"
          element={
            <>
              <HeaderAbout />
              <Ideas />
              <Team />
              <Footer />
            </>
          }
        />

        <Route
          path="/blog"
          element={
            <>
              <HeaderBlog />
              <MainQuestions />
              <Articles />
              <Footer />
            </>
          }
        />

        <Route
          path="/pricing"
          element={
            <>
              <PricingPlan />
              <Questions />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;

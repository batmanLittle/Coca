import "./Main.css";
import Functions from "../Functions/Functions";
import Advantages from "../Advantages/Advantages";
import Statistics from "../Statistics/Statistics";
import Partners from "../Partners/Partners";
import Development from "../Development/Development";
import News from "../News/News";
import Reviews from "../Reviews/Reviews";
import { HeadingMain } from "../HeadingMain/HeadingMain";

function Main({ useCustomAnimation }) {
  return (
    <div className="main">
      <Functions useCustomAnimation={useCustomAnimation} />
      <Advantages />
      <Statistics />
      <Partners />
      <Development />
      <News />
      <Reviews />
    </div>
  );
}

export default Main;

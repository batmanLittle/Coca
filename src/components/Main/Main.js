import "./Main.css";
import Functions from "../Functions/Functions";
import Advantages from "../Advantages/Advantages";
import Statistics from "../Statistics/Statistics";
import Partners from "../Partners/Partners";
import Development from "../Development/Development";
import News from "../News/News";
import Reviews from "../Reviews/Reviews";

function Main() {
  return (
    <div className="main">
      <Functions />
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

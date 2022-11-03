import "./Main.scss";
import MainSection1 from "./MainComponents/MainSection1";
import MainSection2 from "./MainComponents/MainSection2";
import MainBanner1 from "./MainComponents/MainBanner1";
import MainBanner2 from "./MainComponents/MainBanner2";
import Magazine from "./MainComponents/Magazine";
import Slider from "./MainSlide/Slider";
import Section3 from "./MainComponents/Section3";
import Section4 from "./MainComponents/Section4";

function Main() {
  return (
    <div className="main-container">
      <div className="main-container-slide-img">
        <Slider />
      </div>
      <div className="main-section">
        <MainSection1 />
        <MainSection2 />
        <Section3 />
      </div>
      <MainBanner1 />
      <div>
        <Section4 />
      </div>
      <div className="main-banner"></div>
      <MainBanner2 />

      <div className="Magazine-background">
        <Magazine />
      </div>
    </div>
  );
}

export default Main;

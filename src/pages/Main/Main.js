import React from "react";
import "./Main.scss";
import MainSection1 from "./MainComponents/MainSection1";
import MainSection2 from "./MainComponents/MainSection2";
import MainBanner1 from "./MainComponents/MainBanner1";
import MainBanner2 from "./MainComponents/MainBanner2";
import Magazine from "./MainComponents/Magazine";

function Main() {
  return (
    <div className="main-container">
      <div className="main-container-slide-img"></div>
      <div className="main-section">
        <MainSection1 />
        <MainSection2 />
      </div>
      <MainBanner1 />
      <div className="main-banner"></div>
      <MainBanner2 />
      <div className="Magazine-background">
        <Magazine />
      </div>
    </div>
  );
}

export default Main;

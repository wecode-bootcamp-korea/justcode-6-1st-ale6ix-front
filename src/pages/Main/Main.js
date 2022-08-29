import React from 'react';
import './Main.scss';
import MainSection1 from './MainComponents/MainSection1';
import MainSection2 from './MainComponents/MainSection2';
import MainSlideImg from './MainComponents/MainSlideImg';
import MainBanner1 from './MainComponents/MainBanner1';
import Section3 from './MainComponents/Section3';

function Main() {
  return (
    <div className="main-container">
      <div className="main-container-slide-img">
        <MainSlideImg />
      </div>
      <div className="main-section">
        <MainSection1 />
        <MainSection2 />
        <Section3 />
      </div>
      <MainBanner1 />
      <Section3 />
    </div>
  );
}

export default Main;

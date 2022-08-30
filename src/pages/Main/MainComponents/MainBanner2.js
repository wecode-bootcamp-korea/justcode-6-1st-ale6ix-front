import React from "react";
import "./MainBanner2.scss";
import Title from "./Title";

function MainBanner2() {
  const title = "ABOUT ALESSI";
  const color = "#fff";
  return (
    <div className="banner2-container">
      <div className="banner2-inner">
        <Title title={title} color={color} />
        <ul className="banner2-list-container">
          <li className="banner2-img">
            <img src="http://alessi.co.kr/_dj/img/storyimg1.jpg" />
          </li>
          <li className="banner2-description">
            <h2>알레시의 철학</h2>
            <p>
              "진정한 디자인의 작품은 사람들을 움직이게 하고, 감정을 전달하고,
              기억을 떠올리게 하고, 놀라게 하며, 유행을 거스를 줄 알아야
              한다..."<strong>Alberto Alessi</strong>
            </p>
            <button className="allesi-button">ALESSI</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MainBanner2;

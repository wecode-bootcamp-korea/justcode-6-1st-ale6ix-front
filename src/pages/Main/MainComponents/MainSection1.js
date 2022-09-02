import React from "react";
import "./MainSection1.scss";

function MainSection1() {
  return (
    <section className="section1">
      <ul className="main-section-container1">
        <li className="main-section-list1">
          <img src="http://alessi.co.kr/_dj/img/icon_MOKA1.png" alt="icon1" />
          <p className="text1">MOKA POT</p>
          <p className="text2">HOW TO USE</p>
        </li>
        <hr />
        <li className="main-section-list1">
          <img
            src="http://alessi.co.kr/_dj/img/icon_WELCOME1.png"
            alt="icon1"
          />
          <p className="text1">WELCOME</p>
          <p className="text2">+2000 POINT</p>
        </li>
        <hr />
        <li className="main-section-list1">
          <img src="http://alessi.co.kr/_dj/img/icon_NOTICE1.png" alt="icon1" />
          <p className="text1">NOTICE</p>
          <p className="text2">알레시 가격인상 안내</p>
        </li>
        <hr />
        <li className="main-section-list1">
          <img src="http://alessi.co.kr/_dj/img/icon_SNS1.png" alt="icon1" />
          <p className="text1">SNS EVENT</p>
          <p className="text2">INSTA LIKE</p>
        </li>
      </ul>
    </section>
  );
}

export default MainSection1;

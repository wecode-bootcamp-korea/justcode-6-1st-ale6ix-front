import React from 'react';
import './MainSection2.scss';

function MainSection2() {
  return (
    <section>
      <ul className="main-section-container2">
        <li className="main-section-list2">
          <img
            src="http://alessi.co.kr/_dj/img/3banner_1.jpg"
            alt="mainSectionImg1"
          />
          <span className="title">알레시 코리아 공식 인스타그램</span>
          <span className="sub-title">
            신상품을 가장 빠르게 만나볼 수 있는 방법
          </span>
        </li>
        <li className="main-section-list2">
          <img
            src="http://alessi.co.kr/_dj/img/3banner/2208-2.jpg"
            alt="mainSectionImg2"
          />
          <span className="title">알레시의 디자이너들</span>
          <span className="sub-title">
            알레시와 함께한 디자이너의 작품을 모아서 보기
          </span>
        </li>
        <li className="main-section-list2">
          <img
            src="http://alessi.co.kr/_dj/img/3banner/2208-3.jpg"
            alt="mainSectionImg3"
          />
          <span className="title">알레시 100주년 런칭</span>
          <span className="sub-title">알레시100주년 한국 공식 런칭</span>
        </li>
      </ul>
    </section>
  );
}

export default MainSection2;

import React from "react";
import "./MainBanner1.scss";

function MainBanner1() {
  return (
    <div className="banner1-container">
      <div className="banner1-inner">
        <div className="video">
          <iframe
            src="https://www.youtube.com/embed//S3drOrLN_1o?vq=hd720&autoplay=0&controls=0&showinfo=0&rel=0"
            allowFullScreen
            title="allesiFrame"
          ></iframe>
        </div>
        <div className="list">
          <p className="list-title">
            <img
              src="http://alessi.co.kr/_dj/img/main_banner_img6_title.png"
              alt="listImgTitle"
            />
          </p>
          <ul className="list-img-container">
            <li className="list-img">
              <img
                src="http://alessi.co.kr/web/product/medium/202107/b6e25dfb3a30e4ab1aa2f19ed1b6f4f2.jpg"
                alt="listImg1"
              />
              <div className="list-title-container">
                <span className="list-img-title">
                  [Allesi] 알레시 보스턴 쉐이커
                </span>
                <span className="list-price">519,000 won</span>
              </div>
            </li>
            <li className="list-img">
              <img
                src="http://alessi.co.kr/web/product/medium/201801/665_shop1_424547.jpg"
                alt="listImg2"
              />
              <div className="list-title-container">
                <span className="list-img-title">
                  [Allesi] 알레시 미러 칵테일 쉐
                </span>
                <span className="list-price">277,000 won</span>
              </div>
            </li>
            <li className="list-img">
              <img
                src="http://alessi.co.kr/web/product/medium/202007/6104dbbe2d90782357e36dc545d9bea2.jpg"
                alt="listImg3"
              />
              <div className="list-title-container">
                <span className="list-img-title">
                  [Allesi] 알레시 칵테일 쉐이커
                </span>
                <span className="list-price">250,000 won</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainBanner1;

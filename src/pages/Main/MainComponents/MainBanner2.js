import React from 'react';

function MainBanner2() {
  return (
    <div className="banner2-container">
      <div className="banner2-inner">
        <div className="banner2-title">
          <h2>ABOUT ALESSI!</h2>
          <p className="bar"></p>
        </div>
        <div className="banner2-list-container">
          <div className="banner2-img">
            <img src="http://alessi.co.kr/_dj/img/storyimg1.jpg" />
          </div>
          <div className="banner2-description">
            <h2>알레시의 철학</h2>
            <p>
              "진정한 디자인의 작품은 사람들을 움직이게 하고, 감정을 전달하고,
            </p>
            <button>ALESSI</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBanner2;

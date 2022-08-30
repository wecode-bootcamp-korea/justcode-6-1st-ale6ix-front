import React from "react";
import "./MagazineImg.scss";

function MagazineImg() {
  return (
    <div className="Magazine-img">
      <ul className="Magazine-inner">
        <li className="Magazine-list">
          <img
            src="http://alessi.co.kr/file_data/leeonco//2022/07/01/0c6f7bb028be61a99e43bdba9de88a9a.jpg"
            alt="magazine"
          />
        </li>
        <li className="Magazine-title">
          <h2>행복이 가득한 집 5월 with ALESSI</h2>
          <p>행복이 가득한 집 6월호에 나온 알레시 보러가기</p>
        </li>
      </ul>
    </div>
  );
}

export default MagazineImg;

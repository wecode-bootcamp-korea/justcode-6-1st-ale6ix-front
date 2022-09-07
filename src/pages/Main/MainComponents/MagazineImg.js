import React from "react";
import "./MagazineImg.scss";

function MagazineImg({ magazine }) {
  return (
    <div className="Magazine-inner">
      <div className="Magazine-list">
        <img src={magazine.img} alt="magazine" />
      </div>
      <div className="Magazine-title">
        <h2>{magazine.title}</h2>
        <p>{magazine.subTitle}</p>
      </div>
    </div>
  );
}

export default MagazineImg;

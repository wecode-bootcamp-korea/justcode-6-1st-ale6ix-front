import React, { useState } from "react";

import "./Product.scss";

function Product() {
  const [count, setCount] = useState(1);

  const handleUpBtn = () => {
    setCount((prev) => prev + 1);
  };

  const handleDownBtn = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="product-container">
      <div className="product-list">
        <input className="checkbox" type="checkbox" />
        <img src="http://alessi.co.kr/web/product/tiny/202111/002235f9e60213d4c7b4a95b8cb30367.jpg" />
        <p className="product">[Alessi]알레시 안나G 와인오프너 핑크 / AM01 P</p>
        <p className="price">113,000 won</p>
        <div className="display-flex">
          <div className="button-container">
            <div className="count">
              <input value={count} type="text" />
            </div>
            <div className="count-btn">
              <button onClick={handleUpBtn}>
                <img
                  src="http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
                  alt="upBtn"
                />
              </button>
              <button onClick={handleDownBtn}>
                <img
                  src="http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif"
                  alt="downBtn"
                />
              </button>
            </div>
          </div>

          <button className="button">변경</button>
        </div>
        <div className="display-width">
          <img
            className="point"
            src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_point.gif"
          />
          <p>3,000원</p>
        </div>
        <p className="common">기본배송</p>
        <p className="common">무료</p>
        <p className="price">113,000 won</p>
        <div className="display-button">
          <button>주문하기</button>
          <button>관심상품등록</button>
          <button>삭제</button>
        </div>
      </div>
    </div>
  );
}

export default Product;

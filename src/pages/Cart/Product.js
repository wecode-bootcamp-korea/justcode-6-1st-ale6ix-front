import React, { useState, useEffect, useContext, useReducer } from "react";
import Price from "./Price";

import "./Product.scss";

function Product({ item }) {
  // const handleUpBtn = () => {
  //   setCount(++item.amount);
  // };

  // const handleDownBtn = () => {
  //   if (count > 0) {
  //     setCount(--item.amount);
  //     setPrice(Number(item.price) * count).toLocaleString("en");
  //   }
  // };

  return (
    <>
      <div className="product-container">
        <div className="product-list">
          <input className="checkbox" type="checkbox" />
          <img src={item.productImg} />
          <p className="product">{item.productTitle}</p>
          <p className="price">{Number(item.price).toLocaleString("en")} won</p>
          <div className="display-flex">
            <div className="button-container">
              <div className="count">
                <input value={item.amount} type="text" />
              </div>
              <div className="count-btn">
                <button>
                  <img
                    src="http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
                    alt="upBtn"
                  />
                </button>
                <button>
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
          <p className="price">{item.price}won</p>
          <div className="display-button">
            <button>주문하기</button>
            <button>관심상품등록</button>
            <button>삭제</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

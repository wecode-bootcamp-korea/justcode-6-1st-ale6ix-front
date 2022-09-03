import React, { useState } from "react";
import "./Price.scss";

function Price({ item, deleteAllCart }) {
  // 전체상품 가격
  const price = item.map((el) => {
    return el.amount * el.price;
  });

  return (
    <>
      <div className="price-container">
        <div>
          <p>[기본배송]</p>
        </div>
        <div>
          <span>상품구매금액</span>
          <strong>
            {price.reduce((a, b) => a + b, 0).toLocaleString("en")}
          </strong>
          <span>+ 배송비 0 (무료) = 합계 :</span>
          <strong>
            {price.reduce((a, b) => a + b, 0).toLocaleString("en")}
          </strong>
        </div>
      </div>
      <div className="choice-button">
        <div className="delete">
          <span>선택상품을 </span>
          <button>삭제하기</button>
        </div>
        <div className="delete2">
          <button
            onClick={() => {
              deleteAllCart();
            }}
          >
            장바구니 비우기
          </button>
        </div>
      </div>
      <div className="full-price-container">
        <div className="f-width">
          <p>총 상품금액</p>
          <p>총 배송비</p>
          <p className="total">결제예정금액</p>
        </div>
        <div>
          <div className="f-width">
            <p>
              {price.reduce((a, b) => a + b, 0).toLocaleString("en")}
              <span>won</span>
            </p>
            <p>+ 0 won</p>
            <p className="total">
              = {price.reduce((a, b) => a + b, 0).toLocaleString("en")} won
            </p>
          </div>
        </div>
      </div>
      <div className="price-btn">
        <button>결제하기</button>
      </div>
    </>
  );
}

export default Price;

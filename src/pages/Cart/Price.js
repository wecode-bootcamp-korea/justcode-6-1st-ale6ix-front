import React from "react";
import "./Price.scss";

function Price() {
  return (
    <>
      <div className="price-container">
        <div>
          <p>[기본배송]</p>
        </div>
        <div>
          <span>상품구매금액</span>
          <strong>1,260,000</strong>
          <span>+ 배송비 0 (무료) = 합계 :</span>
          <strong>1,260,000</strong>
        </div>
      </div>
      <div className="choice-button">
        <div className="delete">
          <span>선택상품을 </span>
          <button>삭제하기</button>
        </div>
        <div className="delete2">
          <button>장바구니 비우기</button>
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
              369,000<span>won</span>
            </p>
            <p>+ 0 won</p>
            <p className="total">= 369,000 won</p>
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

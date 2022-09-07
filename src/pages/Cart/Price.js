import React, { useState } from "react";
import "./Price.scss";

function Price({ item, deleteAllCart, checkedDelete, deleteCart }) {
  // 전체상품 가격
  const price = item.map((el) => {
    return el.amount * el.price;
  });

  const totalPrice = price.reduce((a, b) => a + b, 0).toLocaleString();

  const handlePaymentBtn = () => {
    if (item.length === 0) {
      return alert("결제할 상품이 없습니다.");
    }
    alert(`총 ${item.length}개의 상품을 결제 하시겠습니까?`);
  };

  return (
    <>
      <div className="price-container">
        <div>
          <p>[기본배송]</p>
        </div>
        <div>
          <span>상품구매금액</span>
          <strong>{totalPrice}</strong>
          <span>+ 배송비 0 (무료) = 합계 :</span>
          <strong>{totalPrice}won</strong>
        </div>
      </div>
      <div className="choice-button">
        <div className="delete">
          <span>선택상품을 </span>
          <button
            onClick={() => {
              checkedDelete();
            }}
          >
            삭제하기
          </button>
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
              {totalPrice}
              <span>won</span>
            </p>
            <p>+ 0 won</p>
            <p className="total">= {totalPrice} won</p>
          </div>
        </div>
      </div>
      <div className="price-btn">
        <button onClick={handlePaymentBtn}>결제하기</button>
      </div>
    </>
  );
}

export default Price;

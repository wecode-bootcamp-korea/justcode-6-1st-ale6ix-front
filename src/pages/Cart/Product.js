import React, { useState, useEffect, useContext, useReducer } from "react";
import Price from "./Price";

import "./Product.scss";

function Product({
  item,
  onChangeProps,
  totalChecked,
  handleSingleCheck,
  deleteCart,
  changeQuantity,
}) {
  const [btnValid, setBtnValid] = useState(false);

  const handleUpBtn = (e) => {
    e.preventDefault();
    // 상품재고 알림창 조건문으로 구현 onChangeProps보다 위에 있어야 적용됨
    if (item.amount >= item.stock)
      return alert("상품의 수량이 재고수량 보다 많습니다.");
    onChangeProps(item.id, "amount", item.amount + 1);
  };

  const handleDownBtn = (e) => {
    e.preventDefault();
    onChangeProps(item.id, "amount", item.amount - 1);
  };

  const handleInputHandler = (e) => {
    onChangeProps(item.id, "amount", +e.target.value);
  };

  useEffect(() => {
    item.amount > 1 ? setBtnValid(false) : setBtnValid(true);
  }, [item.amount]);

  //개별 전체 가격
  const price = (item.amount * item.price).toLocaleString("en");

  // 적립금
  const reserve = (item.price * 0.03).toLocaleString("en");

  return (
    <>
      <div className="product-container">
        <div className="product-list">
          <input
            onChange={(e) => {
              handleSingleCheck(e, item.id);
            }}
            checked={item.checked}
            className="checkbox"
            type="checkbox"
          />
          <img src={item.productImg} />
          <p className="product">{item.productTitle}</p>
          <p className="price">{item.price.toLocaleString("en")} won</p>
          <div className="display-flex">
            <div className="button-container">
              <div className="count">
                <input
                  onChange={handleInputHandler}
                  value={item.amount}
                  type="text"
                />
              </div>
              <div className="count-btn">
                <button onClick={handleUpBtn}>
                  <img
                    src="http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
                    alt="upBtn"
                  />
                </button>
                <button onClick={handleDownBtn} disabled={btnValid}>
                  <img
                    src="http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif"
                    alt="downBtn"
                  />
                </button>
              </div>
            </div>

            <button
              className="button"
              onClick={() => {
                changeQuantity(item.id, item.productId, item.amount);
              }}
            >
              변경
            </button>
          </div>
          <div className="display-width">
            <img
              className="point"
              src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/ico_product_point.gif"
            />
            <p>{reserve}</p>
          </div>
          <p className="common">기본배송</p>
          <p className="common">무료</p>
          <p className="price">{price}won</p>
          <div className="display-button">
            <button>주문하기</button>
            <button>관심상품등록</button>
            <button
              onClick={() => {
                deleteCart(item.id, item.productId, item.productTitle);
              }}
            >
              삭제
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;

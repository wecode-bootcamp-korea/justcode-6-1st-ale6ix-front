import React, { useContext, useEffect, useState } from "react";
import { CartContext } from "./Cart";

import "./CartProductTitle.scss";
import Price from "./Price";
import Product from "./Product";

function CartProductTitle({
  item,
  onChangeProps,
  handleSingleCheck,
  totalCheckboxHandler,
  totalChecked,
  deleteCart,
  deleteAllCart,
}) {
  return (
    <div className="Cart-product-container">
      <div className="Cart-product-title">
        <input
          onChange={(e) => {
            totalCheckboxHandler(e.target.value);
          }}
          checked={totalChecked.length === item.length ? true : false}
          type="checkbox"
        />
        <p className="img">이미지</p>
        <p className="product">상품정보</p>
        <p className="price">판매가</p>
        <p className="common">수량</p>
        <p className="common">적립금</p>
        <p className="common">배송구분</p>
        <p className="common">배송비</p>
        <p className="price">합계</p>
        <p className="choice">선택</p>
      </div>
      {item?.map((product) => {
        return (
          <Product
            item={product}
            handleSingleCheck={handleSingleCheck}
            onChangeProps={onChangeProps}
            totalChecked={totalChecked}
            deleteCart={deleteCart}
          />
        );
      })}
      <Price item={item} deleteAllCart={deleteAllCart} />
    </div>
  );
}

export default CartProductTitle;

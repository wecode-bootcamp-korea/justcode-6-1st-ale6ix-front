import React, { useContext } from "react";
import { CartContext } from "./Cart";
import "./CartList.scss";

function CartList({ item }) {
  return (
    <div className="Cart-list-container">
      <div className="bottom-container">
        <p>
          배송상품(<span>{item.length}</span>)
        </p>
        <p className="border-bottom"></p>
      </div>
    </div>
  );
}

export default CartList;

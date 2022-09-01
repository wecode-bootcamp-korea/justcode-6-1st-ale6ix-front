import React from "react";
import "./CartList.scss";

function CartList({ data }) {
  return (
    <div className="Cart-list-container">
      <div className="bottom-container">
        <p>
          배송상품(<span>{data.length}</span>)
        </p>
        <p className="border-bottom"></p>
      </div>
    </div>
  );
}

export default CartList;

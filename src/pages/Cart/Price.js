import React from "react";
import "./Price.scss";

function Price() {
  return (
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
  );
}

export default Price;

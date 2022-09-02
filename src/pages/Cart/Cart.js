import React, { useEffect, useReducer, useState } from "react";
import "./Cart.scss";
import CartHeading from "./CartHeading";
import CartList from "./CartList";
import CartProductTitle from "./CartProductTitle";

function Cart() {
  return (
    <div className="Cart-container">
      <CartHeading />
      <CartList />
      <CartProductTitle />
    </div>
  );
}

export default Cart;

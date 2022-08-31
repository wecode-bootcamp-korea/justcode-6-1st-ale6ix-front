import React from "react";
import "./Cart.scss";
import CartHeading from "./CartHeading";
import CartList from "./CartList";
import CartProductTitle from "./CartProductTitle";
import Product from "./Product";

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

import React, { useEffect, useState } from "react";
import "./Cart.scss";
import CartHeading from "./CartHeading";
import CartList from "./CartList";
import CartProductTitle from "./CartProductTitle";
import Product from "./Product";

function Cart() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setProduct(data.cart));
  }, []);

  return (
    <div className="Cart-container">
      <CartHeading />
      <CartList data={product} />
      <CartProductTitle />
    </div>
  );
}

export default Cart;

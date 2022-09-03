import React, { useEffect, useCallback, useState } from "react";
import "./Cart.scss";
import CartHeading from "./CartHeading";
import CartList from "./CartList";
import CartProductTitle from "./CartProductTitle";

function Cart() {
  const [item, setItem] = useState([]);
  const [totalChecked, setTotalChecked] = useState();

  // 장바구니 데이터 get
  const getFetchItem = useCallback(async () => {
    try {
      const response = await fetch("/data/cart.json");
      if (!response.ok) {
      }
      const data = await response.json();
      const list = data.groupProductList.map((el) => {
        return {
          id: el.user_order_id,
          productId: el.product_id,
          amount: el.quantity,
          price: +el.price,
          productImg: el.main_image_url,
          productTitle: el.product_name,
          stock: +el.stock,
        };
      });
      setItem(list);
    } catch {}
  }, []);

  useEffect(() => {
    getFetchItem();
  }, [getFetchItem]);

  // 수량 +- 구현 로직
  const onChangeProps = (id, key, value) => {
    setItem((prevState) => {
      return prevState.map((obj) => {
        if (obj.id === id) {
          return { ...obj, [key]: value };
        } else {
          return { ...obj };
        }
      });
    });
  };

  const totalCheckboxHandler = (value) => {
    setItem((prevState) => {
      return prevState.map((el) => {
        return { ...el, isChecked: value };
      });
    });
    setTotalChecked(value);
  };

  return (
    <div className="Cart-container">
      <CartHeading />
      <CartList item={item} />
      <CartProductTitle
        item={item}
        onChangeProps={onChangeProps}
        totalCheckboxHandler={totalCheckboxHandler}
        totalChecked={totalChecked}
      />
    </div>
  );
}

export default Cart;

import React, { useEffect, useCallback, useState } from "react";
import "./Cart.scss";
import CartHeading from "./CartHeading";
import CartList from "./CartList";
import CartProductTitle from "./CartProductTitle";

function Cart() {
  const [item, setItem] = useState([]);
  const [totalChecked, setTotalChecked] = useState(false);

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
          amount: +el.quantity,
          price: +el.price,
          productImg: el.main_image_url,
          productTitle: el.product_name,
          stock: +el.stock,
        };
      });
      setItem(list);
    } catch {}
  }, []);

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

  // 체크박스 전체 개체 선택
  const totalCheckboxHandler = (checked) => {
    setTotalChecked(checked);
    setItem((prev) => {
      return prev.map((list) => {
        list.checked = checked;
        return list;
      });
    });
  };
  // 체크박스 단일 개체 선택
  const handleSingleCheck = (e, id) => {
    const { checked } = e.target;
    let allCheck = true;
    setItem((prev) => {
      const result = prev.map((list) => {
        if (list.id === id) {
          list.checked = checked;
        }
        if (list.checked === false) allCheck = false;
        return list;
      });

      setTotalChecked(allCheck);
      return result;
    });
  };

  useEffect(() => {
    getFetchItem();
  }, [getFetchItem]);

  // 장바구니 개별 삭제구현
  const deleteCart = (target, targetName) => {
    alert(`${targetName}상품을 정말 삭제하시겠습니까?`);
    setItem((prev) => {
      return prev.filter((el) => {
        return el.id !== target;
      });
    });
  };

  // 장바구니 전체 삭제
  const deleteAllCart = () => {
    alert("장바구니를 비우시겠습니까?");
    setItem([]);
  };

  // 체크된 상품 삭제하기
  const checkedDelete = () => {
    setItem((prev) => {
      return prev.filter((product) => product.checked !== totalChecked);
    });
  };

  return (
    <div className="Cart-container">
      <CartHeading />
      <CartList item={item} />
      <CartProductTitle
        item={item}
        onChangeProps={onChangeProps}
        handleSingleCheck={handleSingleCheck}
        totalCheckboxHandler={totalCheckboxHandler}
        totalChecked={totalChecked}
        deleteCart={deleteCart}
        deleteAllCart={deleteAllCart}
        checkedDelete={checkedDelete}
      />
    </div>
  );
}

export default Cart;

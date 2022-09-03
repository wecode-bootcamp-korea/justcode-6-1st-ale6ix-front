import React, { useEffect, useCallback, useState } from "react";
import "./Cart.scss";
import CartHeading from "./CartHeading";
import CartList from "./CartList";
import CartProductTitle from "./CartProductTitle";

function Cart() {
  const [item, setItem] = useState([]);
  const [totalChecked, setTotalChecked] = useState([]);

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

  // 체크박스 전체 단일 개체 선택
  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setTotalChecked((prev) => [...prev, id]);
    } else {
      // 체크 해제
      setTotalChecked(totalChecked.filter((el) => el !== id));
    }
  };

  const totalCheckboxHandler = (checked) => {
    if (checked) {
      const idArray = [];
      // 전체 체크 박스가 체크 되면 id를 가진 모든 elements를 배열에 넣어주어서,
      // 전체 체크 박스 체크
      item.forEach((el) => idArray.push(el.id));
      setTotalChecked(idArray);
    }

    // 반대의 경우 전체 체크 박스 체크 삭제
    else {
      setTotalChecked([]);
    }
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
      />
    </div>
  );
}

export default Cart;

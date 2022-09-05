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
      const response = await fetch("http://localhost:8000/products/cart", {
        method: "GET",
        headers: {
          Authorization:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjM0MDU0MywiZXhwIjoxNjYyMzQ0MTQzfQ.1H5LnH6jerSQPvvmpL7aj3CfAYgqTYv0MUOLHpJ1sG4",
        },
      });
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
  const deleteCart = (target, targetId, targetName) => {
    alert(`${targetName}상품을 정말 삭제하시겠습니까?`);
    const data = {
      data: [
        {
          cart_id: target,
          product_id: targetId,
        },
      ],
    };

    // setItem((prev) => {
    //   return prev.map((product) => {
    //     if (product.checked === totalChecked) {
    //       return data.push({
    //         cart_id: product.id,
    //         product_id: product.productId,
    //       });
    //     }
    //   });
    // });

    fetch("http://localhost:8000/products/cart", {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjM0MDU0MywiZXhwIjoxNjYyMzQ0MTQzfQ.1H5LnH6jerSQPvvmpL7aj3CfAYgqTYv0MUOLHpJ1sG4",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setItem(data));

    // setItem((prev) => {
    //   return prev.filter((el) => {
    //     return el.id !== target;
    //   });
    // });
  };

  // 장바구니 전체 삭제
  const deleteAllCart = () => {
    alert("장바구니를 비우시겠습니까?");
    setItem([]);
  };

  // 체크된 상품 삭제하기
  const checkedDelete = () => {
    let ppp = item.filter((product) => product.checked === totalChecked);

    fetch("http://localhost:8000/products/cart", {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjM0MDU0MywiZXhwIjoxNjYyMzQ0MTQzfQ.1H5LnH6jerSQPvvmpL7aj3CfAYgqTYv0MUOLHpJ1sG4",
      },
      body: JSON.stringify({
        data: ppp.map((list) => {
          return { cart_id: list.id, product_id: list.productId };
        }),
      }),
    })
      .then((res) => console.log(res))
      .then((data) => console.log(data));
    // setItem((prev) => {
    //   return prev.filter((product) => product.checked !== totalChecked);
    // });
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

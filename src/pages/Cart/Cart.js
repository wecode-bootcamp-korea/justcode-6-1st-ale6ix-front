import React, { useEffect, useCallback, useState } from "react";
import "./Cart.scss";
import CartHeading from "./CartHeading";
import CartList from "./CartList";
import CartProductTitle from "./CartProductTitle";

function Cart() {
  const [item, setItem] = useState([]);
  const [totalChecked, setTotalChecked] = useState(false);

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjM1MDU3OSwiZXhwIjoxNjYyMzYxMzc5fQ.a_2XUD5xIK4skQqg_LY8E6yiZJy4U9H7Dr4_WqIrJeE";

  // 장바구니 데이터 get
  const getFetchItem = useCallback(async () => {
    try {
      const response = await fetch("http://localhost:8000/products/cart", {
        method: "GET",
        headers: {
          Authorization: token,
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

  // 개별 상품 삭제하기 버튼
  const deleteCart = useCallback(async (target, targetId, targetName) => {
    alert(`${targetName}상품을 정말 삭제하시겠습니까?`);
    const data = {
      data: [
        {
          cart_id: target,
          product_id: targetId,
        },
      ],
    };
    try {
      const response = await fetch("http://localhost:8000/products/cart", {
        method: "DELETE",
        headers: {
          "content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(data),
      });
      if (response.ok) {
        const response1 = await fetch("http://localhost:8000/products/cart", {
          method: "GET",
          headers: {
            "content-Type": "application/json",
            Authorization: token,
          },
        });
        const data = await response1.json();
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
      }
    } catch {}
  }, []);

  // 장바구니 전체 삭제
  const deleteAllCart = () => {
    alert("장바구니를 비우시겠습니까?");
    setItem([]);
  };

  // 체크된 상품 삭제하기
  const checkedDelete = () => {
    let checkProduct = item.filter(
      (product) => product.checked === totalChecked
    );

    fetch("http://localhost:8000/products/cart", {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({
        data: checkProduct.map((list) => {
          return { cart_id: list.id, product_id: list.productId };
        }),
      }),
    }).then((res) => {
      if (res.ok) {
        fetch("http://localhost:8000/products/cart", {
          method: "GET",
          headers: {
            "content-Type": "application/json",
            Authorization: token,
          },
        })
          .then((res) => res.json())
          .then((data) => {
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
          });
      }
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

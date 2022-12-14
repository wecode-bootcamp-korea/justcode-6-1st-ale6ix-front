import React, { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.scss";
import CartHeading from "./CartHeading";
import CartList from "./CartList";
import CartProductTitle from "./CartProductTitle";

function Cart() {
  const [item, setItem] = useState([]);
  const [totalChecked, setTotalChecked] = useState(false);

  const navigate = useNavigate();

  // const token =
  //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjUyMjIzMCwiZXhwIjoxNjYyNTMzMDMwfQ.BLMoMJrFqoo-93kt0RRWXYZpeKGx2lcg2Hjs5rztquM";

  // 장바구니 데이터 get
  const getFetchItem = useCallback(async () => {
    const response = await fetch("http://localhost:8000/products/cart", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    });

    const data = await response.json();

    if (data.message === "success_userOrderCartList") {
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
    } else if (
      data.message === "TOKEN_EXPIRED" ||
      data.message === "TOKEN_MUST_BE_PROVIDED"
    ) {
      alert("유효하지 않은 정보입니다.");
      navigate("/login");
    }
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

  // 변경 버튼 눌렀을때 수량 변경
  const changeQuantity = useCallback((userId, id, amount) => {
    alert(`${amount}개로 변경 하시겠습니까?`);
    const quantity = {
      cart_id: userId,
      product_id: id,
      quantity: amount,
    };

    fetch("http://localhost:8000/products/cart", {
      method: "PATCH",
      headers: {
        "content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(quantity),
    });
    // .then((res) => console.log(res))
  }, []);

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

    const response = await fetch("http://localhost:8000/products/cart", {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      const response1 = await fetch("http://localhost:8000/products/cart", {
        method: "GET",
        headers: {
          "content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
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
  }, []);

  // 장바구니 전체 삭제
  const deleteAllCart = () => {
    alert("장바구니를 비우시겠습니까?");

    fetch("http://localhost:8000/products/cart/all", {
      method: "DELETE",
      headers: {
        // "content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then(() => setItem([]));
  };

  // 체크된 상품 삭제하기
  const checkedDelete = () => {
    alert("선택하신 상품을 삭제하시겠습니까?");
    let checkProduct = item.filter(
      (product) => product.checked === totalChecked
    );

    fetch("http://localhost:8000/products/cart", {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
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
            Authorization: localStorage.getItem("token"),
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
        changeQuantity={changeQuantity}
      />
    </div>
  );
}

export default Cart;

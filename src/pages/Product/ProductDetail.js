import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetail.scss";

import ProductBottom from './ProductBottom';

function ProductDetail() {
  const [product, setProduct] = useState();
  const [count, setCount] = useState(0);
  const [price, setPrice] = useState();

  const params = useParams();
  const productId = params.productId;

  // 수량 인풋
  const handleInputHandler = (e) => {
    setCount(e.target.value);
  };

  // +,- 버튼
  const handleUpBtn = () => {
    if (product.stock <= count) {
      return alert("상품의 수량이 재고수량 보다 많습니다.");
    }
    setCount((prev) => prev + 1);
  };
  const handleDownBtn = () => {
    if (count <= 0) return;
    setCount((prev) => prev - 1);
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjQ1NjYwMSwiZXhwIjoxNjYyNDY3NDAxfQ.Y_IKm1NRw5ZjkR8rV7qgKtIntZPATPbhelFyJDrFEg8";

  // 실제 통신에 필요한 패치
  useEffect(() => {
    fetch(`http://localhost:8000/products/detail/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      });
  }, []);

  // 구매하기,장바구니 post요청
  const handleCart = () => {
    alert("장바구니로 이동하시겠습니까?");
    console.log(count);
    fetch("http://localhost:8000/products/cart", {
      method: "POST",
      headers: {
        Authorization: token,
        "content-Type": "application/json",
      },
      body: JSON.stringify({
        product_id: product.productsId,
        quantity: count,
      }),
    }).then((res) => res.json());
    navigate("/carts");
  };

  const alertHandler = () => {
    alert("관심상품으로 등록되었습니다");
  };

  return (
    <>
      {product != undefined && (
        <div className="product-detail-container">
          <div className="product-image-container">
            <img
              src={product.productDetail.mainImageUrl}
              alt=""
              className="product-detail-img"
            />
          </div>
          <div className="product-info-container">
            <div className="info-container-1">
              <span> {"제품명 : " + product.productDetail.productName}</span>
              <span>
                {"가격 : " +
                  Number(product.productDetail.price).toLocaleString() +
                  " won"}
              </span>
            </div>
            <div className="info-container-2">
              <span>{product.productDetail.productName}</span>
              <div className="button-container">
                <div className="count">
                  <input
                    value={count}
                    onChange={handleInputHandler}
                    type="text"
                  />
                </div>
                <div className="count-btn">
                  <button onClick={handleUpBtn}>
                    <img
                      src="http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
                      alt="upBtn"
                    />
                  </button>
                  <button onClick={handleDownBtn}>
                    <img
                      src="http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif"
                      alt="downBtn"
                    />
                  </button>
                </div>
              </div>
            </div>
            <div className="info-container-3">
              <p>
                TOTAL :{" "}
                <span className="total-price">
                  {(product.productDetail.price * count).toLocaleString()} won
                </span>
                <span> ({count}개)</span>
              </p>
            </div>
            <div className="info-container-4">
              <button onClick={handleCart}>구매하기</button>
              <button onClick={handleCart}>장바구니</button>
              <button onClick={alertHandler}>관심상품</button>
            </div>
          </div>
        </div>
      )}
      <div>
        <ProductBottom />
      </div>
    </>
  );
}
export default ProductDetail;

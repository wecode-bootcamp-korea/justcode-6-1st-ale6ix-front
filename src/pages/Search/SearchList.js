import React from "react";
import { useNavigate } from "react-router-dom";

function SearchList({ product }) {
  const navigate = useNavigate();
  console.log(product);
  const clickHandler = (id) => {
    navigate("/product/detail/" + id);
  };
  return (
    <div className="product-list-container">
      <div
        className="product-list"
        key={product.id}
        onClick={() => clickHandler(product.id)}
      >
        <span className="product-image">
          <img src={product.main_image_url} alt="이미지" />
        </span>
        <span className="product-title">{product.product_name}</span>
        <span className="product-price">
          {Number(product.price).toLocaleString() + " won"}
        </span>
      </div>
    </div>
  );
}

export default SearchList;

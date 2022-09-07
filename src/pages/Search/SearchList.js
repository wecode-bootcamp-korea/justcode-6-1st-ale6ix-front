import React from "react";
import { useNavigate } from "react-router-dom";
import "./SearchList.scss";

function SearchList({ product }) {
  const navigate = useNavigate();
  const clickHandler = (id) => {
    navigate("/product/detail/" + id);
  };
  return (
    <div
      className="search-product-list"
      onClick={() => clickHandler(product.id)}
    >
      <span className="search-product-image">
        <img src={product.main_image_url} alt="이미지" />
      </span>
      <span className="product-title">{product.product_name}</span>
      <span className="product-price">
        {Number(product.price).toLocaleString() + " won"}
      </span>
    </div>
  );
}

export default SearchList;

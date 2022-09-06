import React from "react";
import { useNavigate } from "react-router-dom";

import "./ProductList.scss";

function ProductList(props) {
  const navigate = useNavigate();

  const clickHandler = (id) => {
    navigate("/product/detail/" + id);
  };
  return (
    <>
      <div className="product-list-container">
        {props.subCategoryInfo.map((subInfo) => {
          return (
            <div
              className="product-list"
              key={subInfo.id}
              onClick={() => clickHandler(subInfo.id)}
            >
              <span className="product-image">
                <img src={subInfo.main_image_url} alt="이미지" />
              </span>
              <span className="product-title">{subInfo.product_name}</span>
              <span className="product-price">
                {Number(subInfo.price).toLocaleString() + " won"}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;

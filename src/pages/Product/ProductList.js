import React from "react";

import "./ProductList.scss";

function ProductList(props) {
  return (
    <>
      <div className="product-list-container">
        {props.subCategoryInfo.map((subInfo) => {
          return (
            <div className="product-list">
              <span className="product-image">
                <img src={subInfo.main_image_url} alt="이미지" />
              </span>
              <span className="product-title">{subInfo.product_name}</span>
              <span className="product-price">
                {Number(subInfo.price).toLocaleString()}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ProductList;

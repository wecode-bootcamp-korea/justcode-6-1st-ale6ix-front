import React from "react";
import { useNavigate } from "react-router-dom";

import "./ProductCategory.scss";

function ProductCategory(props) {
  const { group_code_name, detailCode } = props.subMenuList;

  const navigate = useNavigate();

  const handleClick = (e) => {
    navigate("/product/" + props.bigId + "/" + e.target.value);
  };

  return (
    <div className="category-container">
      <h2>{group_code_name}</h2>
      <ul>
        {detailCode.map((category) => {
          return (
            <li
              key={category.detailCodeId}
              className={
                props.smallId == category.detailCodeId ? "active-category" : ""
              }
            >
              <button
                onClick={handleClick}
                value={category.detailCodeId}
                className="category-button"
              >
                {category.detailCodeName}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductCategory;

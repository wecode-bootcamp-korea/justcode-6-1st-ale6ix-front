import React from "react";
import { useNavigate } from "react-router-dom";

import "./ProductCategory.scss";

function ProductCategory(props) {
  const { group_code_name, detailCode } = props.subMenuList;

  const navigate = useNavigate();

  return (
    <div className="category-container">
      <h2>{group_code_name}</h2>
      <ul>
        {detailCode.map((subCategory) => {
          return (
            <li key={subCategory.detailCodeId}>
              <a> {subCategory.detailCodeName}</a>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ProductCategory;

import React from "react";

function ProductCategory(props) {
  const { group_code_name, detailCode } = props.subMenuList;

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

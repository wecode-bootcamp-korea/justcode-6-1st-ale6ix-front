import React, { useState, useEffect } from "react";

import ProductCategory from "./ProductCategory";
import ProductList from "./ProductList";

function ProductSmallCategory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8000/products/list?groupCodeId=${bigId}&detailCodeId=${smallId}&limit=10&offset=${offset}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [bigId, smallId, offset]);

  return (
    <div className="product-container-wrapper">
      {data.length != 0 && (
        <ProductCategory
          bigId={bigId}
          subMenuList={data.productList.ByGroupcode}
        />
      )}
      {data.length != 0 && (
        <ProductList subCategoryInfo={data.productList.productList} />
      )}
      {data.length != 0 && (
        <Paginate
          filteredData={data.productList.productList}
          offsetHandler={offsetHandler}
          totalCount={data.productList.totalCount}
        />
      )}
    </div>
  );
}

export default ProductSmallCategory;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import ProductCategory from "./ProductCategory";
import ProductList from "./ProductList";
import Paginate from "./Paginate";
import "./Product.scss";

function ProductBigCategory() {
  const [data, setData] = useState([]);
  const [offset, setOffset] = useState(0);

  const params = useParams();
  const bigId = params.bigId;

  function offsetHandler(offsetNum) {
    setOffset(offsetNum);
  }

  useEffect(() => {
    fetch(
      `http://localhost:8000/products/list?groupCodeId=${bigId}&limit=10&offset=${offset}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [bigId, offset]);

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

export default ProductBigCategory;

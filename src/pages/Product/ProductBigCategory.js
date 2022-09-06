import React, { useState, useEffect } from "react";

function ProductBigCategory() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      `http://localhost:8000/products/list?groupCodeId=${bigId}&limit=10&offset=${offset}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [bigId, offset]);

  return;
}

export default ProductBigCategory;

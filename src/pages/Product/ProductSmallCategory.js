import React, { useState, useEffect } from "react";

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

  return;
}

export default ProductSmallCategory;

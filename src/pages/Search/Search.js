import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function Search() {
  const [message, setMessage] = useState("");

  const [searchProduct, seetSearchProduct] = useState([]);

  const handleSearchBtn = () => {
    fetch(`http://localhost:8000/products/search?keyword=${message}`, {
      method: "GET",
      headers: { "content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => seetSearchProduct(data.productSearchList));
  };

  const handleSearch = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div>
      <input value={message} onChange={handleSearch} />
      <button onClick={handleSearchBtn}>검색</button>
      <span>총{searchProduct.length}개의 상품이 검색되었습니다.</span>
    </div>
  );
}

export default Search;

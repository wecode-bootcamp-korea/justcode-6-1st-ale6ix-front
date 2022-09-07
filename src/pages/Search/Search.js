import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Search.scss";

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
    <div className="search-wrap">
      <div className="search-container">
        <div className="search-title-box">
          <h2 className="search-title">SEARCH</h2>
        </div>
        <input value={message} onChange={handleSearch} />
        <button onClick={handleSearchBtn}>검색</button>
        <span>총{searchProduct.length}개의 상품이 검색되었습니다.</span>
      </div>
    </div>
  );
}

export default Search;

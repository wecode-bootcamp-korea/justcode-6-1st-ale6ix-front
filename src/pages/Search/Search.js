import React, { useEffect, useState } from "react";
import "./Search.scss";
import Title from "../Main/MainComponents/Title";
import SearchList from "./SearchList";

function Search() {
  const [message, setMessage] = useState("");
  const [searchProduct, setSearchProduct] = useState([]);

  // 검색 했을때 데이터요청
  const handleSearchBtn = () => {
    if (message) {
      fetch(`http://localhost:8000/products/search?keyword=${message}`, {
        method: "GET",
        headers: { "content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => setSearchProduct(data.productSearchList));
    }
  };

  const handleSearch = (e) => {
    setMessage(e.target.value);
  };

  const enterSearch = (e) => {
    if (e.key === "Enter") {
      setMessage(e.target.value);
      handleSearchBtn();
    }
  };

  return (
    <div className="search">
      <div className="search-container">
        <Title title={"search"} />
      </div>
      <div className="search-input-container">
        <div className="search-input">
          <span>검색</span>
          <input
            value={message}
            onChange={handleSearch}
            onKeyPress={enterSearch}
          />
          <button className="search-btn" onClick={handleSearchBtn}>
            GO!
          </button>
        </div>
        <span>총{searchProduct.length}개의 상품이 검색되었습니다.</span>
      </div>
      <div className="search">
        {searchProduct?.map((product) => {
          return <SearchList key={product.id} product={product} />;
        })}
      </div>
    </div>
  );
}

export default Search;

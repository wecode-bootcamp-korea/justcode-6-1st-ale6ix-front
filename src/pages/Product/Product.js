import React from "react";

import "./Product.scss";

function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("data/products.json")
      .then((res) => res.json())
      .then((data) => {
        setData(data.groupProductList);
      });
  }, []);

  return (
    <div className="product-container">
      {data.length != 0 && <ProductCategory subMenuList={data.ByGroupcode} />}
      {data.length != 0 && (
        <ProductList subCategoryInfo={data.groupProductList} />
      )}
    </div>
  );
}

export default Product;

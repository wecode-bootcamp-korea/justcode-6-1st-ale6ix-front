import React, { useState } from "react";
import "./Button.scss";

function Button() {
  const [count, setCount] = useState(1);

  const handleUpBtn = () => {
    setCount((prev) => prev + 1);
  };

  const handleDownBtn = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div className="button-container">
      <div className="count">
        <input value={count} type="text" />
      </div>
      <div className="count-btn">
        <button onClick={handleUpBtn}>
          <img
            src="http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_up.gif"
            alt="upBtn"
          />
        </button>
        <button onClick={handleDownBtn}>
          <img
            src="http://img.echosting.cafe24.com/skin/base_ko_KR/product/btn_count_down.gif"
            alt="downBtn"
          />
        </button>
      </div>
    </div>
  );
}

export default Button;

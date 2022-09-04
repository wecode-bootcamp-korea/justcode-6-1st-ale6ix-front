import React, { useEffect, useState } from "react";
import "./CertifiedNumber.scss";

function CertifiedNumber() {
  const [complete, setComplete] = useState(false);
  const [certify, setCertify] = useState();

  const handleNum = (e) => {
    const number = e.target.value;
    setCertify(number);
  };

  const handleComplete = () => {
    if (toString(certify).length > 3) {
      setComplete(true);
    }
  };

  return (
    <div>
      <p className="certified-content">
        인증번호가 발송되었습니다.
        <br />
        인증번호를 받지 못하셨다면 휴대폰 번호를 확인해 주세요.
        <br />
      </p>
      <div className="certified-number-title">
        <span className="width">인증번호</span>
      </div>
      <div className="certified-number">
        <input
          alt="인증번호"
          className="number-input"
          type="text"
          onChange={handleNum}
        />
      </div>
      <button
        alt="확인"
        className="ok-btn"
        type="submit"
        value={complete}
        onClick={handleComplete}
      >
        확인
      </button>
      {complete === true && (
        <div className="complete">인증이 완료되었습니다.</div>
      )}
    </div>
  );
}

export default CertifiedNumber;

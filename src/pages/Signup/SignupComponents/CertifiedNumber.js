import React from 'react';
import './CertifiedNumber.scss';

function CertifiedNumber() {
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
        <input alt="인증번호" className="number-input" type="text" />
        <span className="certified-time">1:12</span>
      </div>
      <button alt="확인" className="ok-btn" type="submit">
        확인
      </button>
    </div>
  );
}

export default CertifiedNumber;

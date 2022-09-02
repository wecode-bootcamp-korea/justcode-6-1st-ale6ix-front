import React, { useState } from 'react';
import './SignupBasicInfo.scss';
import CertifiedNumber from './CertifiedNumber';

function SignupBasicInfo({ data, optionValue }) {
  const [phone1, setPhone1] = useState('');
  const [phone2, setPhone2] = useState('');
  const [btnOn, setBtnOn] = useState(false);

  const handleNum1 = e => {
    const num1 = e.target.value;
    setPhone1(num1);
  };

  const handleNum2 = e => {
    const num2 = e.target.value;
    setPhone2(num2);
  };

  const runBtn = () => {
    if (phone1.length > 3 && phone2.length > 3) {
      return setBtnOn(true);
    } else {
      return setBtnOn(false);
    }
  };

  return (
    <div className="basic-info-box">
      {data.map(input => {
        return (
          <div key={input.id} className={input.class}>
            <span className="width">{input.spanAlt}</span>
            <input
              alt={input.spanAlt}
              className={input.inputClass}
              type={input.type}
            ></input>
            {input.duplication && (
              <button className="id-duplication" type="button">
                {input.duplication}
              </button>
            )}
            {input.terms && <span className="id-terms">{input.terms}</span>}
          </div>
        );
      })}
      <div className="signup-phone">
        <span className="width">휴대전화</span>
        <select className="join-phone-input">
          {optionValue.map(value => {
            return (
              <option key={value.id} value={value.option}>
                {value.option}
              </option>
            );
          })}
        </select>
        <span> - </span>
        <input
          alt="휴대전화"
          className="join-phone-input"
          type="text"
          maxLength={4}
          onChange={handleNum1}
        />
        <span> - </span>
        <input
          alt="휴대전화"
          className="join-phone-input"
          type="text"
          maxLength={4}
          onChange={handleNum2}
        />
        <button
          alt="인증번호"
          className="join-phone-certify"
          type="button"
          value={btnOn}
          onClick={runBtn}
        >
          인증번호받기
        </button>
        <CertifiedNumber />
      </div>
    </div>
  );
}

export default SignupBasicInfo;

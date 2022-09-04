import React, { useEffect, useState } from "react";
import "./SignupBasicInfo.scss";
import CertifiedNumber from "./CertifiedNumber";

function SignupBasicInfo({ data, optionValue }) {
  const [phone1, setPhone1] = useState("");
  const [phone2, setPhone2] = useState("");
  const [btnOn, setBtnOn] = useState(false);

  const handleNum1 = (e) => {
    const num1 = e.target.value;
    setPhone1(num1);
  };

  const handleNum2 = (e) => {
    const num2 = e.target.value;
    setPhone2(num2);
  };

  const useAlert = () => {
    alert("인증번호는 2321 입니다.");
  };

  const runBtn = () => {
    if (phone1.length > 3 && phone2.length > 3) {
      return setBtnOn(true), setTimeout(useAlert, 1000);
    } else {
      return setBtnOn(false);
    }
  };

  return (
    <div className="basic-info-box">
      {data.map((input) => {
        return (
          <div key={input.id} className={input.class}>
            <span className="width">{input.spanAlt}</span>
            <input
              alt={input.spanAlt}
              className={input.inputClass}
              type={input.type}
            ></input>
            {input.terms && <span className="id-terms">{input.terms}</span>}
          </div>
        );
      })}
      <div className="signup-phone">
        <span className="width">휴대전화</span>
        <select className="join-phone-input">
          {optionValue.map((value) => {
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
          type="number"
          onChange={handleNum1}
        />
        <span> - </span>
        <input
          alt="휴대전화"
          className="join-phone-input"
          type="number"
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
        {btnOn === true && <CertifiedNumber />}
      </div>
    </div>
  );
}

export default SignupBasicInfo;

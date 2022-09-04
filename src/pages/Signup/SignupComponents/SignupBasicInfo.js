import React, { useState } from "react";
import "./SignupBasicInfo.scss";
import CertifiedNumber from "./CertifiedNumber";

function SignupBasicInfo({ optionValue }) {
  const [signupId, setSignupId] = useState("");
  const [signupPw, setSignupPw] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [btnOn, setBtnOn] = useState(false);

  const handleId = (e) => {
    setSignupId(e.target.value);
  };

  const handlePw = (e) => {
    setSignupPw(e.target.value);
  };

  const handleName = (e) => {
    setSignupName(e.target.value);
  };

  const handleEmail = (e) => {
    setSignupEmail(e.target.value);
  };

  const handlePhone = (e) => {
    setSignupPhone(e.target.value);
  };

  const runBtn = () => {
    const useAlert = () => {
      alert("인증번호는 2321 입니다.");
    };
    if (signupPhone.length > 3) {
      return setBtnOn(true), setTimeout(useAlert, 1000);
    } else {
      return setBtnOn(false);
    }
  };

  return (
    <div className="basic-info-box">
      <div className="signup-id">
        <span className="width">아이디</span>
        <input
          alt="아이디"
          className="join-id-input"
          type="text"
          value={signupId}
          onChange={handleId}
        />
        <span className="id-terms">(영문소문자/숫자, 4~16자)</span>
      </div>
      <div className="signup-pw">
        <span className="width">비밀번호</span>
        <input
          alt="비밀번호"
          className="join-pw-input"
          type="password"
          value={signupPw}
          onChange={handlePw}
        />
        <span className="id-terms">(영문 대소문자/숫자, 4~16자)</span>
      </div>
      <div className="signup-name">
        <span className="width">이름</span>
        <input
          alt="이름"
          className="join-name-input"
          type="text"
          value={signupName}
          onChange={handleName}
        />
      </div>
      <div className="signup-email">
        <span className="width">이메일</span>
        <input
          alt="이메일"
          className="join-email-input"
          type="text"
          value={signupEmail}
          onChange={handleEmail}
        />
      </div>
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
          value={signupPhone}
          onChange={handlePhone}
        />
        <span> - </span>
        <input
          alt="휴대전화"
          className="join-phone-input"
          type="number"
          value={signupPhone}
          onChange={handlePhone}
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

import React, { useState } from "react";
import "./Signup.scss";
import CertifiedNumber from "./SignupComponents/CertifiedNumber";
import Terms from "./SignupComponents/Terms";
import AddInfo from "./SignupComponents/AddInfo";
import SignupComplete from "./SignupComponents/SignupComplete";

const Signup = () => {
  const [signupShow, setSignupShow] = useState(true);
  const [complete, setComplete] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [signupId, setSignupId] = useState("");
  const [signupPw, setSignupPw] = useState("");
  const [signupName, setSignupName] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [signupPhone, setSignupPhone] = useState("");
  const [btnOn, setBtnOn] = useState(false);
  const [message, setMessage] = useState();

  const accountCheck = () => {
    fetch(`http://localhost:8000/users/signup?account=${signupId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        result.message !== "signUp available"
          ? setMessage(`${signupId}는 이미 사용중인 아이디입니다.`)
          : setMessage(`${signupId}는 사용이 가능한 아이디입니다.`);
      });
  };

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

  const register = () => {
    fetch("http://localhost:8000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: signupId,
        password: signupPw,
        name: signupName,
        email: signupEmail,
        phone_number: signupPhone,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "userCreated") {
          setInputValue(result.userData);
          setSignupShow(false);
          setComplete(true);
        } else {
          alert("회원가입에 실패했습니다.");
        }
      });
  };

  const runBtn = () => {
    const useAlert = () => {
      alert("인증번호는 2321 입니다.");
    };
    if (signupPhone.length > 10) {
      return setBtnOn(true), setTimeout(useAlert, 1000);
    } else {
      return setBtnOn(false);
    }
  };

  return (
    <>
      {signupShow && (
        <div className="signup-wrap">
          <main className="signup-container">
            <h2 className="signup-title">회원 가입</h2>
            <h3 className="basic-info">기본정보</h3>
            <div className="basic-info-box">
              <div className="signup-id">
                <span className="width">아이디</span>
                <input
                  alt="아이디"
                  className="join-id-input"
                  type="text"
                  value={signupId}
                  onChange={handleId}
                  onBlur={accountCheck}
                />
                <span className="message-box">{message}</span>
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
                <input
                  alt="휴대전화"
                  className="join-phone-input"
                  type="text"
                  value={signupPhone}
                  onChange={handlePhone}
                />
              </div>
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
            <h3 className="add-info">추가정보</h3>
            <AddInfo />
            <h3 className="whole-agreement">전체 동의</h3>
            <Terms />
            <div className="signup-btn">
              <button className="go-to-main" onClick={register}>
                회원가입
              </button>
            </div>
          </main>
        </div>
      )}
      {complete && <SignupComplete completeValue={inputValue} />}
    </>
  );
};

export default Signup;

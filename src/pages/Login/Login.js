import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.scss";
import GoToSignup from "./LoginComponents/GoToSignup";

function Login() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  const handleId = (e) => {
    setLoginId(e.target.value);
  };

  const handlePw = (e) => {
    setLoginPw(e.target.value);
  };

  const loginSuccess = (e) => {
    e.preventDefault();
    fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        account: loginId,
        password: loginPw,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "LOGIN_SUCCESS") {
          localStorage.setItem("token", JSON.stringify(result.token));
          alert(`${loginId}님 환영합니다.`);
          navigate("/main");
        } else {
          alert("로그인에 실패했습니다.");
        }
      });
  };

  return (
    <div className="login-wrap">
      <main className="login-container">
        <h2 className="login-title">LOGIN</h2>
        <form className="login-input-box">
          <label className="login-id">
            <span className="login-id-img">
              <img
                alt="아이디로고"
                className="id-icon"
                src="/images/id-img.png"
              />
            </span>
            <input
              alt="아이디"
              className="login-id-input"
              type="text"
              value={loginId}
              onChange={handleId}
            />
          </label>
          <label className="login-pw">
            <span className="login-pw-img">
              <img
                alt="비밀번호로고"
                className="pw-icon"
                src="/images/pw-img.png"
              />
            </span>
            <input
              alt="비밀번호"
              className="login-pw-input"
              type="password"
              value={loginPw}
              onChange={handlePw}
            />
          </label>
          <div className="login-btn-box">
            <button className="login-btn" onClick={loginSuccess}>
              로그인
            </button>
          </div>
          <GoToSignup />
        </form>
      </main>
    </div>
  );
}

export default Login;

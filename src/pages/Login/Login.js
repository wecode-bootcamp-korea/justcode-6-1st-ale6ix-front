import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import LoginInput from "../../components/Logins/LoginInput";
import GoToSignup from "../../components/Logins/GoToSignup";

function Login() {
  const navigate = useNavigate();
  const [loginId, setLoginId] = useState("");
  const [loginPw, setLoginPw] = useState("");

  const goToMain = () => {
    return navigate("/");
  };

  const onLoginBtnClick = () => {
    const errorMessage = "아이디 또는 비밀번호가 일치하지 않습니다.";

    const body = {
      account: loginId,
      password: loginPw,
    };

    fetch("http://localhost:8000/users/login", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then((result) => {
        result.token ? goToMain() : alert(errorMessage);
      });
  };

  return (
    <div className="login-wrap">
      <main className="login-container">
        <h2 className="login-title">LOGIN</h2>
        <form className="login-input-box">
          <LoginInput
            idInputValue={setLoginId}
            pwInputValue={setLoginPw}
            toMain={goToMain}
          />
          <div className="login-btn-box">
            <Link to="/" className="login-btn" onClick={onLoginBtnClick}>
              로그인
            </Link>
          </div>
          <GoToSignup />
        </form>
      </main>
    </div>
  );
}

export default Login;

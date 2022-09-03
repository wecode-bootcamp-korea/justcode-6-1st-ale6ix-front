import React from 'react';
import './LoginInput.scss';

function LoginInput({ idInputValue, pwInputValue, toMain }) {
  const handleId = e => {
    const idValue = e.target.value;
    idInputValue(idValue);
  };

  const handlePw = e => {
    const pwValue = e.target.value;
    pwInputValue(pwValue);
  };

  const handleKeyUp = e => {
    if (e.key === 'Enter') {
      toMain();
    }
  };

  return (
    <>
      <label className="login-id">
        <span className="login-id-img">
          <img alt="아이디로고" className="id-icon" src="/images/id-img.png" />
        </span>
        <input
          alt="아이디"
          className="login-id-input"
          type="text"
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
          onChange={handlePw}
          onKeyUp={handleKeyUp}
        />
      </label>
    </>
  );
}

export default LoginInput;

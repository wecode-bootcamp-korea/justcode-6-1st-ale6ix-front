import React from "react";
import { Navigate } from "react-router-dom";
import "./SignupComplete.scss";

function SignupComplete({ completeId, completeName, completeEmail }) {
  const goToLoginBtn = () => {
    Navigate("/login");
  };

  return (
    <div className="complete-wrap">
      <div className="signup-complete-container">
        <h2 className="signup-complete-title">회원 가입 완료</h2>
        <h3 className="signup-complete-comment">회원가입이 완료 되었습니다.</h3>
        {/* 유저정보 박스 */}
        <div className="signup-complete-box">
          <div className="signup-thanku">
            <img
              alt="느낌표"
              className="exclamation-mark"
              src="/images/exclamation-mark.png"
            />
            <span className="thanku-comment">
              저희 쇼핑몰을 이용해 주셔서 감사합니다.
            </span>
          </div>
          <div className="border-bottom" />
          <div className="signup-complete-flex">
            <div className="signup-user-box">
              <img
                alt="유저이미지"
                className="user-img"
                src="/images/user.png"
              />
            </div>
            <div className="stick"></div>
            <div className="signup-user-info-box">
              <div>
                <img
                  alt="오른쪽 화살표"
                  className="right-arrow"
                  src="/images/right-arrow.png"
                />
                <span className="signup-user-content">아이디</span>
                <span className="singup-user-account">{completeId}</span>
              </div>
              <div>
                <img
                  alt="오른쪽 화살표"
                  className="right-arrow"
                  src="/images/right-arrow.png"
                />
                <span className="signup-user-content">이름</span>
                <span className="signup-user-name">{completeName}</span>
              </div>
              <div>
                <img
                  alt="오른쪽 화살표"
                  className="right-arrow"
                  src="/images/right-arrow.png"
                />
                <span className="signup-user-content">이메일</span>
                <span className="singup-user-email">{completeEmail}</span>
              </div>
            </div>
          </div>
        </div>
        {/* 유저정보 박스 끝 */}
        <div className="bottom-section">
          <div className="signup-complete-check">
            <span className="name-thick">{completeName}</span>님은 [일반회원/
            배송비 무료] 회원이십니다.
          </div>
          <button className="go-to-main" onClick={goToLoginBtn}>
            로그인으로 이동
          </button>
        </div>
        <div className="border-bottom" />
      </div>
    </div>
  );
}

export default SignupComplete;

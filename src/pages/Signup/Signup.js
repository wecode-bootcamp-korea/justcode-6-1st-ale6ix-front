import React, { useRef } from "react";
import "./Signup.scss";
import Terms from "./SignupComponents/Terms";
import AddInfo from "./SignupComponents/AddInfo";
import SignupBasicInfo from "./SignupComponents/SignupBasicInfo";

const Signup = () => {
  const SignupBasicInfoRef = useRef();

  return (
    <div className="signup-wrap">
      <main className="signup-container">
        <h2 className="signup-title">회원 가입</h2>
        <h3 className="basic-info">기본정보</h3>
        <SignupBasicInfo ref={SignupBasicInfoRef} />
        <h3 className="add-info">추가정보</h3>
        <AddInfo />
        <h3 className="whole-agreement">전체 동의</h3>
        <Terms />
        <div className="signup-btn">
          <button
            className="go-to-main"
            onClick={() => {
              SignupBasicInfoRef.current.register();
            }}
          >
            회원가입
          </button>
        </div>
      </main>
    </div>
  );
};

export default Signup;

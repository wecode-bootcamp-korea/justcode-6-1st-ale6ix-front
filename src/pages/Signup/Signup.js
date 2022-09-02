import React from "react";
import { Link } from "react-router-dom";
import "./Signup.scss";
import InputForm from "../../components/Signups/InputForm";
import Terms from "../../components/Signups/Terms";
import AddInfo from "../../components/Signups/AddInfo";

function Signup() {
  return (
    <div className="signup-wrap">
      <main className="signup-container">
        <h2 className="signup-title">회원 가입</h2>
        <h3 className="basic-info">기본정보</h3>
        <InputForm />
        <h3 className="add-info">추가정보</h3>
        <AddInfo />
        <h3 className="whole-agreement">전체 동의</h3>
        <Terms />
        <div className="signup-btn" type="submit">
          <Link className="go-to-main" to="/">
            회원가입
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Signup;

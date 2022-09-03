import React from 'react';
import { Link } from 'react-router-dom';
import './GoToSignup.scss';

function GoToSignup() {
  return (
    <div className="signup-box">
      <p>
        아직 회원이 아니신가요?
        <br />
        고객님을 위한 다양한 혜택이 준비되어 있습니다.
        <br />
      </p>
      <div className="signup-btn-box">
        <Link to="/signup" className="go-to-signup">
          회원가입
        </Link>
      </div>
    </div>
  );
}

export default GoToSignup;

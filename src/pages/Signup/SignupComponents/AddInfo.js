import React from "react";
import "./AddInfo.scss";

function AddInfo() {
  return (
    <div className="signup-birth">
      <span className="width">생년월일</span>
      <input alt="생년월일" className="join-birth-year" type="number" />
      <span className="birth">&nbsp;년 </span>
      <input alt="생년월일" className="join-birth-month" type="number" />
      <span className="birth">&nbsp;월 </span>
      <input alt="생년월일" className="join-birth-day" type="number" />
      <span className="birth">&nbsp;일 </span>
      <span>
        &nbsp;&nbsp;&nbsp;
        <input alt="양력" type="radio" name="solarLunar" />
        양력
      </span>
      <span>
        &nbsp;&nbsp;
        <input alt="음력" type="radio" name="solarLunar" />
        음력
      </span>
    </div>
  );
}

export default AddInfo;

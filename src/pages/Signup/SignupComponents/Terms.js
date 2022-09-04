import React, { useState, useEffect } from "react";
import "./Terms.scss";

function Terms() {
  const [allCheck, setAllCheck] = useState(false);
  const [firstCheck, setfirstCheck] = useState(false);
  const [secondCheck, setSecondCheck] = useState(false);

  const allBtnClick = () => {
    if (allCheck === false) {
      setAllCheck(true);
      setfirstCheck(true);
      setSecondCheck(true);
    } else {
      setAllCheck(false);
      setfirstCheck(false);
      setSecondCheck(false);
    }
  };

  const firstBtnClick = () => {
    if (firstCheck === false) {
      setfirstCheck(true);
    } else {
      setfirstCheck(false);
    }
  };

  const secondBtnClick = () => {
    if (secondCheck === false) {
      setSecondCheck(true);
    } else {
      setSecondCheck(false);
    }
  };

  useEffect(() => {
    if (firstCheck === true && secondCheck === true) {
      setAllCheck(true);
    } else {
      setAllCheck(false);
    }
  }, [firstCheck, secondCheck]);

  return (
    <div className="terms-wrap">
      <div className="whole-agreement-box">
        <input
          alt="전체동의"
          className="whole-agreement-btn"
          type="checkbox"
          checked={allCheck}
          onChange={allBtnClick}
        />

        <span>
          &nbsp;이용약관 및 개인정보수집 및 이용, 쇼핑정보 수신(선택)에
          모두동의합니다.
        </span>
      </div>

      <div className="agreement-box">
        <h4 className="agreement-title">
          [필수] 이용약관 및 개인정보 수집 및 이용 동의
        </h4>
        <div className="agreement-contents-box">
          <div className="agreement-contents">
            <p className="agreement-content">
              제1조(목적)
              <br />
              이 약관은 OO 회사(전자상거래 사업자)가 운영하는
              OO사이버몰(이하“몰”이라 한다)에서 제공하는 인터넷
              관련서비스(이하“서비스”라한다)를 이용함에 있어 사이버 몰과
              이용자의 권리․의무 및 책임사항을 규정함을 목적으로 합니다.
              <br />
              ※「PC통신, 무선 등을 이용하는 전자상거래에 대해서도 그 성질에
              반하지 않는 한 이 약관을 준용합니다.」
              <br />
              제2조(정의)
              <br />
              “몰”이란 OO 회사가 재화 또는 용역(이하 “재화 등”이라 함)을
              이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화
              등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러
              사이버몰을 운영하는 사업자의 의미로도 사용합니다.
            </p>
          </div>
        </div>
        <p className="agreement">
          <span>이용약관에 동의하십니까?&nbsp;&nbsp;</span>
          <input
            alt="동의"
            className="areement-btn"
            type="checkbox"
            checked={firstCheck}
            onChange={firstBtnClick}
          />
          <label>&nbsp;동의함</label>
        </p>
      </div>

      <div className="agreement-box">
        <h4 className="agreement-title">[선택] 개인정보 제3자 제공 동의</h4>
        <div className="agreement-contents-box">
          <div className="agreement-content">
            <p className="agreement-content">
              아래 내용의 동의 여부는 회원가입에 영향을 미치지 않습니다. 단,
              동의 거부시 서비스 이용에 제한이 있을 수 있습니다.
              <br />
              <br />
              - 제공 받는 자 :
              <br />
              <br />
              - 제공 항목 :
              <br />
              <br />
              - 제공 목적 :
              <br />
              <br />- 보유 및 이용기간 :
            </p>
          </div>
        </div>
        <p className="agreement">
          <span>이용약관에 동의하십니까?&nbsp;&nbsp;</span>
          <input
            alt="동의"
            className="areement-btn"
            type="checkbox"
            checked={secondCheck}
            onChange={secondBtnClick}
          />
          <label>&nbsp;동의함</label>
        </p>
      </div>
    </div>
  );
}
export default Terms;

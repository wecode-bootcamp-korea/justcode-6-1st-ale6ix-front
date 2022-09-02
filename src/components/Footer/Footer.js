import React from 'react';

import css from './Footer.scss';

import './Footer.scss'

function Footer() {
  return (
    <div className="footer-container">
      <div className="">
        <ul className="footer-list">
          <li className="footer-box">
            <dl>
              <dt>C/S</dt>
              <dd className="numder">02-1234-5678</dd>
              <dd className="numder"><small>am 9:00 ~ pm 6:00 (Sat,Sun Holidey Closed)</small></dd>
            </dl>
          </li>
          <li className="footer-box">
            <dl className="company">
              <dt>COMPANY</dt>
              <dd><span className="info-title">상호</span>주식회사 ALE6IX</dd>
              <dd><span className="info-title">대표</span>ALE</dd>
              <dd><span className="info-title">사업자등록번호</span>123-45-6789</dd>
              <dd><span className="info-title">통신판매업 신고</span>제 2022-저스트코드-6기</dd>
              <dd><span className="info-title">전화</span>02-1234-5678</dd>
              <dd><span className="info-title">주소</span>저스트코드 6기 (주)ALE6IX</dd>
            </dl>
            </li>
          <li className="footer-box">
            <dl>
              <dt>BANK</dt>
              <dd><span className="info-title">기업은행</span>012.345678.90.1234</dd>
              <dd><span className="info-title">예금주</span> (주)ALE6IX</dd>
            </dl>
            </li>
        </ul>
      </div>
    </div>
  )
  
}

export default Footer;

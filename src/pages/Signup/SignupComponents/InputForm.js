import React from 'react';
import SignupBasicInfo from './SignupBasicInfo';

function InputForm() {
  const signupInputData = [
    {
      id: 1,
      class: 'signup-id',
      spanAlt: '아이디',
      inputClass: 'join-id-input',
      type: 'text',
      terms: '(영문소문자/숫자, 4~16자)',
      duplication: '중복확인',
    },
    {
      id: 2,
      class: 'signup-pw',
      spanAlt: '비밀번호',
      inputClass: 'join-pw-input',
      type: 'password',
      terms: '(영문 대소문자/숫자, 4~16자)',
    },
    {
      id: 3,
      class: 'signup-name',
      spanAlt: '이름',
      inputClass: 'join-name-input',
      type: 'text',
    },
    {
      id: 4,
      class: 'signup-email',
      spanAlt: '이메일',
      inputClass: 'join-email-input',
      type: 'text',
    },
  ];

  const phoneOption = [
    {
      id: 1,
      option: '010',
    },
    {
      id: 2,
      option: '011',
    },
    {
      id: 3,
      option: '016',
    },
    {
      id: 4,
      option: '017',
    },
    {
      id: 5,
      option: '018',
    },
    {
      id: 6,
      option: '019',
    },
  ];

  return (
    <div className="inputForm">
      <SignupBasicInfo data={signupInputData} optionValue={phoneOption} />
    </div>
  );
}

export default InputForm;

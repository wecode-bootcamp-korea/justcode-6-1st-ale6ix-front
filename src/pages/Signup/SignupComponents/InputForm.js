import React from "react";
import SignupBasicInfo from "./SignupBasicInfo";

function InputForm() {
  const phoneOption = [
    {
      id: 1,
      option: "010",
    },
    {
      id: 2,
      option: "011",
    },
    {
      id: 3,
      option: "016",
    },
    {
      id: 4,
      option: "017",
    },
    {
      id: 5,
      option: "018",
    },
    {
      id: 6,
      option: "019",
    },
  ];

  return (
    <div className="inputForm">
      <SignupBasicInfo optionValue={phoneOption} />
    </div>
  );
}

export default InputForm;

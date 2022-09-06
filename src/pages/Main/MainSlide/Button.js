import React from "react";
import './Button.scss'

import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function Button({prevSlide,nextSlide}){
  return(
    <div className="arrows">
      <span className="prev"
        onClick={prevSlide}>
          <FiChevronRight /></span>
      <span className="next"
        onClick={nextSlide}>
        <FiChevronLeft /></span>
    </div>
  )
}
export default Button;
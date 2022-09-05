import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import imgSlider from "./imgSlider";
import Buttons from "./Buttons";
import Dots from "./Dots";
import './Slider.scss';

function Slider() {

  const [activeIndex,setActiveIndex] = useState(0);
//  console.log(activeIndex);
  useEffect(()=>{
    const interval = setInterval(()=>{
      setActiveIndex(activeIndex === imgSlider.length -1 
        ? 0 
        : activeIndex + 1);
    },3000);
    return () => clearInterval(interval);
  },[activeIndex]);

  const prevSlide= () => {
    // console.log('click')
    setActiveIndex(activeIndex < 1 ? imgSlider.length- 1 : activeIndex -1)
  }
  const nextSlide= () => {
    setActiveIndex(activeIndex === imgSlider.length-1 ? 0 : activeIndex + 1)
  }
// console.log(prevSlide)
// console.log(nextSlide)
  

  return(
    <div className="slider-container">
      <SliderContent 
      activeIndex={activeIndex} 
      imgSlider={imgSlider}/>
      <Buttons
      className="arrows"
      prevSlide={prevSlide}
      nextSlide={nextSlide}
      />
      <Dots 
      activeIndex={activeIndex} 
      imgSlider={imgSlider}
      onclick={(activeIndex) => 
        setActiveIndex(activeIndex)}
      />
    </div>
  )
}
export default Slider;
import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import imgSlider from "./imgSlider";
import Button from "./Button";
import Dots from "./Dots";
import './Slider.scss';

function Slider(props) {

  const len = imgSlider.length -1;

  const [activeIndex,setActiveIndex] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setActiveIndex(activeIndex === len 
        ? 0
        : activeIndex + 1);
    },3000);
    return () => clearInterval(interval);
  },[activeIndex]);


  return(
    <div className="slider-container">
      <SliderContent 
      activeIndex={activeIndex} 
      imgSlider={imgSlider}/>
      <Button 
      prevSlide= {() => 
        setActiveIndex(activeIndex < 1 ? len : activeIndex - 1)} />
      <Button 
      nextSlide={() => 
        setActiveIndex(activeIndex === len ? 0 : activeIndex + 1)} />
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
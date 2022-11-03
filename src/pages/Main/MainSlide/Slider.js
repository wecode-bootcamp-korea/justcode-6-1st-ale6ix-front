import React, { useEffect, useState } from "react";
import SliderContent from "./SliderContent";
import Buttons from "./Buttons";
import Dots from "./Dots";
import "./Slider.scss";

function Slider() {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(
        activeIndex === imgSlider.length - 1 ? 0 : activeIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  const prevSlide = () => {
    setActiveIndex(activeIndex < 1 ? imgSlider.length - 1 : activeIndex - 1);
  };
  const nextSlide = () => {
    setActiveIndex(activeIndex === imgSlider.length - 1 ? 0 : activeIndex + 1);
  };

  return (
    <div className="slider-container">
      <SliderContent activeIndex={activeIndex} imgSlider={imgSlider} />
      <Buttons className="arrows" prevSlide={prevSlide} nextSlide={nextSlide} />
      <Dots
        activeIndex={activeIndex}
        imgSlider={imgSlider}
        onclick={(activeIndex) => setActiveIndex(activeIndex)}
      />
    </div>
  );
}
export default Slider;

const imgSlider = [
  {
    title: "ALE6IX",
    urls: "http://alessi.co.kr/_dj/img/mainbanner/2103-1.gif",
  },
  {
    title: "",
    urls: "	http://alessi.co.kr/_dj/img/mainbanner/2209-2.jpg",
    text: "",
  },
  {
    title: "",
    urls: "http://alessi.co.kr/_dj/img/mainbanner/2209-4.jpg",
  },
  {
    title: "",
    urls: "http://alessi.co.kr/_dj/img/mainbanner/2202-1.jpg",
    text: "",
  },
  {
    title: "",
    urls: "http://alessi.co.kr/_dj/img/mainbanner/2105-1.jpg",
  },
  {
    urls: "http://alessi.co.kr/_dj/img/mainbanner/2101-5.jpg",
  },
];

import React from "react";

function SliderContent({activeIndex,imgSlider}){
  return(
    <section>
      {imgSlider.map((slide,index)=>(
        <div key={index} 
        className={index === activeIndex
        ? "slides active"
        : "inactive"}>
          <img className="slide-img" src={slide.urls} alt="img"/>
          <h2 className="slide-title">{slide.title}</h2>
          <p className="slide-text">{slide.text}</p>
        </div>
      ))}
    </section>
  )
}
export default SliderContent;
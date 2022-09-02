import React, { useEffect, useState } from 'react';
import './Main.scss';
import MainSection1 from './MainComponents/MainSection1';
import MainSection2 from './MainComponents/MainSection2';
import MainSlideImg from './MainComponents/MainSlideImg';
import MainBanner1 from './MainComponents/MainBanner1';
import Section3 from './MainComponents/Section3';
import Slider from './MainSlide/Slider';
import Section4 from './MainComponents/Section4';

function Main() {

  const [productList,setproductList] = useState([]);

  useEffect(()=>{
    fetch('/data/product.json')
    .then((res)=>res.json())
    .then((data)=>{
      setproductList(data.groupProductList);
    })
  },[])
  // console.log(productList); 
  //{groupProductList: Array(6), ByGroupcode: {…}}
  // console.log(productList.groupProductList); 
  //(6) [{…}, {…}, {…}, {…}, {…}, {…}]
  return (

    <div className="main-container">
      <div className="main-container-slide-img">
        <Slider />
      </div>
      <div className="main-section">
        <MainSection1 />
        <MainSection2 />
        {productList.length != 0 && (
          <Section3 productData={productList.groupProductList}/>
        )}
       
      </div>
      <MainBanner1 />
      <div >
      {productList.length != 0 && (
          <Section4 productData={productList.groupProductList}/>
        )}
      </div>
      <div >
      </div>
      <div >
      </div>
      
    </div>
  );
}

export default Main;

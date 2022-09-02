import React, { useEffect, useState } from "react";

import "./Header.scss";
import SubNav from "./SubNav";

function Header() {

  const [nav,setNav] = useState([]);

  useEffect(()=>{
    fetch('/data/navCategories.json')
    .then((res)=>res.json())
    .then((data)=>{
      setNav(data.categoryData)
    })
  },[])

  return (
  <div className="container">
    <div>
      <ul className="nav-top">
        <li className="nav-top-menu"><a href="#" className="nav-top-font">LOGIN</a></li>
        <li className="nav-top-menu"><a href="#" className="nav-top-font">JOIN</a></li>
        <li className="nav-top-menu"><a href="#" className="nav-top-font">CART <span className="counter">0</span></a></li>
        <li className="nav-top-menu"><a href="#" className="nav-top-font">username</a></li>
        <li>
          <button>
          <a href="#">
            <img src="http://alessi.co.kr/_dj/img/top_r_menu_icon_03_b.png" alt="검색" />
          </a>
          </button></li>
      </ul>
    </div>
    <div className="nav-bottom">
      <h1>ALE6IX</h1>
      <ul className="nav-menu">
        <li><a href="#" className="nav-font">ABOUT</a></li>
        <li><a href="#" className="nav-font">STORE</a></li>
          {nav.map((navlist)=>{
            return <li 
              key={navlist.LargeCategoryId}
              className="data-nav"
              >
                {navlist.LargeCategoryName}
              <div className="sub-nav-pop">
                <SubNav sublist={navlist.smallCategories}/>
              </div>
              </li>
            })}
        
      </ul>
      
    </div>
    
  </div>
  )
}

export default Header;

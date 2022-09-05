import { useEffect, useState } from 'react';
import './Section3.scss';


function Section3(){

  const [productData,setProductData] = useState([]);

  useEffect(()=>{
    fetch('/data/recommandList.json')
    .then((res)=>res.json())
    .then((data)=>{
      setProductData(data.recommendProductList)
    })
  })
  
  return(
    <div className="container">
    <section className="section4-box">
      <div className="title">
      <h3>신상품</h3>
      <p></p>
      <span className="text">알레시에서 꾸준한 사랑을 받는 베스트셀러</span>
      </div>
      <div className="product">
        <ul className="prd-list">
        {productData.map((itemlist,index)=>{
          return <li className="prd-box"
          key={index}
          >
            <figure className="item-list" >
              <div className="item-img">
                <img 
                className="item-size"
                src={itemlist.main_image_url} alt="item" />

                <p className='icon-btn'>
                  <span className='icon'><img src="http://img.echosting.cafe24.com/design/skin/admin/ko_KR/btn_prd_zoom.gif" alt="cart"></img></span>
                  <span className='icon'><img src="http://alessi.co.kr/_dj/img/button_other_04.png" alt="zoom"></img></span>
                  <span className='icon'><img src="http://alessi.co.kr/_dj/img/button_other_04.png" alt="blank"></img></span>
                </p>
              </div>
              <figcaption>
                <dl>
                  <dt>{itemlist.product_name}</dt>
                  <dd>{Number(itemlist.price).toLocaleString()}<span>won</span></dd>
                </dl>
              </figcaption>
            </figure>
            </li>
            })}
            
         
        </ul>
      </div>
    </section>
    </div>
  )
}
export default Section3;
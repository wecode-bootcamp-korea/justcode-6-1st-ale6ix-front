import { useState } from 'react';
import Review from './Review';
import './ProductBottom.scss'

function ProductBottom(){

  const [review,setReview]=useState(false);
  const reviewBtn = ()=>{
    setReview(!review)
  }

  return(
    <div className='bottom-container'>
      <ul className='bottom-box'>
       <li className='border-bottom'></li>
       <li className='border border-active'
       onClick={reviewBtn}
       >상품리뷰</li> 
       <li className='border border-active'
       onClick={reviewBtn}
       >상품문의</li>
       <li className='border-bottom'></li>
       <li className='border-bottom'></li>
       <li className='border-bottom'></li>
       <li className='border-bottom'></li>
      </ul>
      
      <div className='modal-container'>
        {review == true 
        && <Review className="review-component"/> }
        
      </div>
    </div>
  )
}
export default ProductBottom;
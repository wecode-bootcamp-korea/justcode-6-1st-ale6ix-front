import { useState } from 'react';
import Review from './Review';
import './ProductBottom.scss'
import Qna from './Qna';

function ProductBottom(){

  const [review,setReview]=useState(false);
  const reviewBtn = ()=>{
    setReview(true)
  }
  const qnaBtn = ()=>{
    setReview(false)
  }

  return(
    <div className='bottom-container'>
      <ul className='bottom-box'>
       <li className='border-bottom'></li>
       <li className='border border-active'
       onClick={reviewBtn}
       >상품리뷰</li> 
       <li className='border border-active'
       onClick={qnaBtn}
       >상품문의</li>
       <li className='border-bottom'></li>
       <li className='border-bottom'></li>
       <li className='border-bottom'></li>
       <li className='border-bottom'></li>
      </ul>
      
      <div className='modal-container'>
        {review === true ?
        <Review /> : <Qna />
        }
      </div>
    </div>
  )
}
export default ProductBottom;
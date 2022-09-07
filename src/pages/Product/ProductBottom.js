import { useState } from 'react';
import Review from './Review';
import './ProductBottom.scss'
import Qna from './Qna';
import { useLinkClickHandler } from 'react-router-dom';

function ProductBottom(){

  const [review,setReview]=useState(false);
  const reviewBtn = ()=>{
    setReview(!review)
  }
  const [qna,setQna]=useState(false);
  const qnaBtn = () =>{
    setQna(!qna)
  }

  const [tab,setTab]=useState(0);
  const onclickHandle = (id)=>{
    setTab({tab:id})
  }
  const obj = {
    0: <Review />,
    1: <Qna />
  }
  return(
    <div className='bottom-container'>
      <ul className='bottom-box'>
       <li className='border-bottom'></li>
       <li className='border border-active'
       onClick={()=> onclickHandle(0)}
       >상품리뷰</li> 
       <li className='border border-active'
       onClick={()=> onclickHandle(1)}
       >상품문의</li>
       <li className='border-bottom'></li>
       <li className='border-bottom'></li>
       <li className='border-bottom'></li>
       <li className='border-bottom'></li>
      </ul>
      
      <div className='modal-container'>
        {review == true &&
        <Review className="review-component"/> }
      </div>
    </div>
  )
}
export default ProductBottom;
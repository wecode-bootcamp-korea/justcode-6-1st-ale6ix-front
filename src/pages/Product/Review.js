import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import './Review.scss';
import ReviewList from "./ReviewList";

function Review(){

  const [reveiw,setReview]=useState([]);
  const params = useParams();
  const productId = params.productId;
  // console.log(productId)
  
  //ref
  const titleValue = useRef();
  const textValue = useRef();

  
//add list => get
  const [newReview,setNewReview]=useState([]);
  const [delData,setDelData]=useState([]);


  useEffect(()=>{
    // fetch('/data/reviewList.json')
    fetch(`http://localhost:8000/products/detail/${productId}/review`,{
      method:"GET",
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(res => res.json())
    .then((data)=>{
      //console.log(data);  //ok {reviewData: Array(16)}
      setReview(data.reviewData)
      setDelData(data.reviewData)
    })
  },[newReview,delData])

//enter
  const enterEvent = (e)=>{
    if(e.key === 'Enter'){ 
      addReview();
    }
  }
  
//add review => post

const addReview = ()=>{
    console.log(titleValue.current.value)

    const data={
      title : titleValue.current.value,
      content : textValue.current.value
    }
  
      let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjUzMzA3MiwiZXhwIjoxNjYyNTQzODcyfQ.-HasqoYNbf0oEAuoTSnJMvLJ_TnUlpTAW07nFtyX_Ng"


    fetch(`http://localhost:8000/products/detail/${productId}/review`,{
      method:"POST",
      headers:{
        "Content-Type" : "application/json",
        "Authorization" : token
      },
      body : JSON.stringify(data)
    })
  //보내기
    .then(res => res.json())
    .then((reviewData)=>{
      titleValue.current.value = "";
      textValue.current.value = "";
      setNewReview(reviewData)
    })
    
}
  //deletes

  const deleteBtn = (id)=>{
 
    // console.log(reveiwId)
    let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjUzMzA3MiwiZXhwIjoxNjYyNTQzODcyfQ.-HasqoYNbf0oEAuoTSnJMvLJ_TnUlpTAW07nFtyX_Ng"
    // console.log()
    fetch(`http://localhost:8000/products/detail/${productId}/review?review_id=${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type" : "application/json",
        "Authorization" : token
      },
    })
    .then(res => res.json())
    .then((datalist)=>{
      if(res.ok){
        return setDelData(datalist)
      }
    })
  }
  
  
  return(
    <div>
      <div className="review-container">
        {reveiw &&
        reveiw.map((list)=>{
          // console.log(list);
          return <ReviewList
          className="review-list-container" 
          // id={id}
          list={list}
          deleteBtn={deleteBtn}
          />
        })}
      </div>
      <div className="add-review">
      <input type="text" 
             ref={titleValue} 
             className="input-title"/>
      <textarea className="review-textarea" 
      ref={textValue}
      onKeyDown={enterEvent}
      rows="10" cols="50"
      placeholder="소중한 리뷰 감사합니다." />

      <button
      onClick={addReview}
      className="add-btn"
      >저장</button>

      </div>
      
    </div>
  )

}
export default Review;
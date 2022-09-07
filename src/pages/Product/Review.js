import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import './Review.scss';
import ReviewList from "./ReviewList";

function Review(){

  const [reveiw,setReview]=useState([]);
  const params = useParams();
  const productId = params.productId;

  //ref
  const titleValue = useRef();
  const textValue = useRef();

  
//add list => get
  const [newReview,setNewReview]=useState([]);


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
    })
  },[newReview])

//enter
  const enterEvent = (e)=>{
    if(e.key === 'Enter'){ 
      addReview();
    }
  }
  
//add review => post



const [id,setId]=useState(1);

const addReview = ()=>{
    console.log(titleValue.current.value)
    setId(id+1)
    const data={
      title : titleValue.current.value,
      content : textValue.current.value
    }
  
      let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTY2MjUyMjIzMCwiZXhwIjoxNjYyNTMzMDMwfQ.BLMoMJrFqoo-93kt0RRWXYZpeKGx2lcg2Hjs5rztquM"


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
      setNewReview(reviewData)
    })
}
  //delete
  // const deleteBtn = ()=>{
  //   fetch(`http://localhost:8000/products/detail/1/review?${id}`,{
  //     method:"DELETE",
  //     headers:{
  //       "Content-Type" : "application/json",
  //       "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM2LCJpYXQiOjE2NjI0NTQ4MjMsImV4cCI6MTY2MjQ2NTYyM30.Rhj4B_HdMjApA-dDZH5IqBl5NYedvZ35qaEKYxvEB1A"
  //     },
  //   })
  //   .then(res => res.json())
  //   .then(res=>{
  //     if(res.ok){
  //       setReview(data.reviewData)
  //     }
  //   })
  //   .catch(error => console.error(error.message));
  // }
  
  
  return(
    <div>
      <div className="review-container">
        {reveiw &&
        reveiw.map((list)=>{
          // console.log(list);
          return <ReviewList
          className="review-list-container" 
          id={id}
          list={list}
          // deleteBtn={deleteBtn}
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
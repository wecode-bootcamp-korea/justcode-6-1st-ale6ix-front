import { useEffect, useReducer, useRef, useState } from "react";
import './Review.scss';
import ReviewList from "./ReviewList";

function Review(){

  const [reveiw,setReview]=useState([]);

  //ref
  const titleValue = useRef();
  const textValue = useRef();

//add list => get
  const [newReview,setNewReview]=useState([]);


  useEffect(()=>{
    // fetch('/data/reviewList.json')
    fetch("http://localhost:8000/products/detail/1/review",{
      method:"GET",
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(res => res.json())
    .then((data)=>{
       console.log(data);  //ok {reviewData: Array(16)}
      setReview(data.reviewData)
    })
  },[newReview])

    // setId(id+1)
    // const newList = {
    //   id : id,
    //   title : titleValue.current.value ,
    //   // userName : userName,
    //   content : textValue.current.value,
    //   createdAt : new Date().toLocaleString()
    // }
    // titleValue.current.value = "";
    // textValue.current.value = ""; 
    // setReview([...reveiw,newList])
  

//enter
  const enterEvent = (e)=>{
    if(e.key === 'Enter'){ 
      addReview();
    }
  }
  
//add review => post

  const [id,setId]=useState(1);

  const addReview = ()=>{
    if(reveiw.length > 0){
      setId(id+1)
      const body={
        title : titleValue.current.value,
        content : textValue.current.value
      }
      // let token = localStorage.getItem("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM2LCJpYXQiOjE2NjI0MzkyODYsImV4cCI6MTY2MjQ1MDA4Nn0.2fpuIsqMyECkvivKnyzgkUFCj22SaGI6rX2zhDxtplU") || '' ;

      fetch("http://localhost:8000/products/detail/1/review",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
          "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM2LCJpYXQiOjE2NjI0NTQ4MjMsImV4cCI6MTY2MjQ2NTYyM30.Rhj4B_HdMjApA-dDZH5IqBl5NYedvZ35qaEKYxvEB1A"
        },
        body : JSON.stringify(body)
      })
      //보내기
      .then(res => res.json())
      .then(result=>{
        if(result.message == "post created"){
          setNewReview(result.reviewData);
          console.log('post created')
        }
        // console.log(result);
      })

    }
  }
    
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
      placeholder="소중한 리뷰 감사합니다.">

      </textarea>
      
      <button
      onClick={addReview}
      className="add-btn"
      >저장</button>
      </div>
      
    </div>
  )

}
export default Review;
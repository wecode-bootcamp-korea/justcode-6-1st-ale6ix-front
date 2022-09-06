import { useEffect, useReducer, useRef, useState } from "react";

function Review(){

  const [reveiw,setReview]=useState([
    {
      id:1,
      userName:'miogy',
      content:'hahaha',
      createdAt : '2022.08.25'
    }
  ])

  //ref
  const titleValue = useRef();
  const textValue = useRef();

//add list => get
  const [newReview,setNewReview]=useState([]);


  useEffect(()=>{

    fetch("http://localhost:4000/products/detail/1",{
      method:"GET",
      headers:{
        "Content-Type" : "application/json"
      }
    })
    .then(res => res.json())
    .then((reveiwData)=>{
      // console.log(reviewData);
      setReview([...reveiw,reveiwData])
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

      fetch("http://localhost:4000/products/detail/1/review",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
          "Authorization" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM2LCJpYXQiOjE2NjI0MzkyODYsImV4cCI6MTY2MjQ1MDA4Nn0.2fpuIsqMyECkvivKnyzgkUFCj22SaGI6rX2zhDxtplU"
        },
        body : JSON.stringify(body)
      })
      //보내기
      .then(res => res.json())
      .then(result=>{
        if(result.message == "post created"){
          
          setNewReview();
          console.log('post created')
        }
        // console.log(result);
      })

    }
  }
    
  return(
    <div>
      <div className="review-container">
        <ul>
          {newReview &&
          newReview.map((list)=>{
            return <li key={list.id} 
            className="reviewCard">
            <div className="row">
              <div>
              {list.title}
              </div>
              <h3 className="userId">{list.account}</h3>
              <span className="createdTime">
                {list.createdAt}
              </span>
            </div>
            <p className="contents">{list.content}</p>
          </li>
          })}
        </ul>
      </div>
      <input type="text" 
             ref={titleValue} />
      <input 
      ref={textValue}
      onKeyDown={enterEvent}
      // onChange={(e)=>{
      //   setNewReview(e.target.value)
      // }}
      type='text' placeholder="소중한 리뷰 감사합니다." />
      <button
      onClick={addReview}
      >저장</button>
    </div>
  )

}
export default Review;
import { useEffect, useRef, useState } from "react";

function Review(){

  const value = useRef();

  const [reveiw,setReview]=useState([
    {
      id:1,
      userName:'miogy',
      content:'hahaha',
      createdAt : '2022.08.25'
    }
  ])

  const [newReview,setNewReview]=useState();

  //add
  const [id,setId]=useState(1);

  const addlist = ()=>{
    setId(id+1)
    const newList = {
      id : id,
      title : title,
      // userName : userName,
      content : value.current.value,
      createdAt : new Date().toLocaleString()
    }
    value.current.value = ""; 
    setReview([...reveiw,newList])
  }
  //enter
  const enterEvent = (e)=>{
    if(e.key === 'Enter'){ 
      addlist();
    }
  }

  const [title,setTitle] = useState('');
  
  const body={
    product_id : id,
    title : title ,
    content : value.current.value
  }

  
  const addReview = ()=>{
    fetch("http://localhost:4000/products/reviews",{
      method:"POST",
      headers:{
	      Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM2LCJpYXQiOjE2NjIzNjI4NTUsImV4cCI6MTY2MjM3MzY1NX0._9kopi-Xzq0HJP1yQXE9wdyR_1w8fbxwVRV2nFpELRM'
      },
      body : JSON.stringify(body)
    })
    .then((res)=>{
      if(res.ok){
        alert('리뷰 등록이 완료되었습니다.');
      }else {
      }
    })
    // .then((data)=>{
    //   fetch("http://localhost:4000/products/reviews",{
    //     headers:{
    //       Authorization : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjM2LCJpYXQiOjE2NjIzNjI4NTUsImV4cCI6MTY2MjM3MzY1NX0._9kopi-Xzq0HJP1yQXE9wdyR_1w8fbxwVRV2nFpELRM'
    //     },
    //   })
    //   .then((res)=>res.json())
    //   .then((data)=>{
    //     setNewReview(data)
    //   })
    // })
    .catch(error => console.error(error.message));
  }
  

  return(
    <div>
      <div className="review-container">
        <ul>
          {newReview.length > 0 &&
          newReview.map((list,index)=>{
            return <li key={index} 
            className="reviewCard">
            <div className="row">
              <div>{list.title}</div>
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
      <input 
      ref={value}
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
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import QnaList from "./QnaList";
import './Qna.scss';

function Qna(){

  const [qna,setQna]=useState([]);
  const [newQna,setNewQna]=useState([]);
  const params = useParams();
  const productId = params.productId;

  const titleValid = useRef();
  const textValid = useRef();

  useEffect(()=>{
    fetch(`http://localhost:8000/products/detail/${productId}/question`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then((list)=>{
      setQna(list.questionData)
    })
  },[newQna])

  const addList = ()=>{
    const body={
      title : titleValid.current.value,
      content : textValid.current.value
    }
  
    fetch(`http://localhost:8000/products/detail/${productId}/question`,{
      method: "POST",
      headers:{
        "Content-Type":"application/json",
        "Authorization":localStorage.getItem("token")
      },
      body : JSON.stringify(body)
    })
    .then(res=>res.json())
    .then((qnalist)=>{
      titleValid.current.value = "";
      textValid.current.value = "";
      setNewQna(qnalist.questionData)
    })
  }
  //delete
  const addDelete = (id)=>{

    fetch(`http://localhost:8000/products/detail/${productId}/question?question_id=${id}`,{
      method:"DELETE",
      headers:{
        "Content-Type":"application/json",
        "Authorization":localStorage.getItem("token")
      },
    })
    .then(res=>{
      if(res.ok){
        fetch(`http://localhost:8000/products/detail/${productId}/question`,{
      method:"GET",
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then(res => res.json())
    .then((list)=>{
      setQna(list.questionData)
    })
      }
    })
  }

  return(
    <div>
      <div className="qna-container">
        {qna &&
        qna.map((qnaData)=>{
          return <QnaList qnaData={qnaData}
          addDelete={addDelete}
          className="qna-list-container"/>
        })}
      </div>
      <div className="add-container">
        <input type="text" ref={titleValid}
        className="title-area" 
        placeholder={`제품번호 : ${productId}`}
        />
        <textarea ref={textValid}
        rows="10" cols="50"
        placeholder="문의를 남겨주세요" 
        className="qna-textarea"
        />

        <button onClick={addList}
        className="add-btn">
          저장
        </button>
      </div>
    </div>
  )
}
export default Qna;
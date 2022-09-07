import { useState } from 'react';
import './QnaList.scss';

function QnaList({qnaData}){
  const [modal,setModal]=useState(false);
  const modalBtn = ()=>{
    setModal(!modal)
  }
  return(
    <div className="qna-list">
      <ul className="qna-card">
      <li key={qnaData.id}>
        <div className="qna-title"
        onClick={modalBtn}>
          <p>{qnaData.title}</p>
          <p>{qnaData.createdAt}</p>
          </div>
          <div className="qna-text">
              {modal == true &&
              <dl className="text-container">
              <dt className="qna-text-left">
                <p className="qna-user">
                  <AiOutlineUser style={{marginRight : "5px"}}/>
                  {qnaData.account}</p>
                <p className="qna-content">{qnaData.content}</p>
              </dt>
              <dd className="qna-text-right">
              <button 
              // key={deleteBtn.id}
              // onClick={() => deleteBtn(qnaData.question_id)}
              >삭제</button></dd>
            </dl>
              }
            </div>
              
      </li>
      </ul>
    </div>
  )
}
export default QnaList;
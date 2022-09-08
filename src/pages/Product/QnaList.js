import { useState } from 'react';
import './QnaList.scss';
import { AiOutlineUser } from 'react-icons/ai'

function QnaList({qnaData,addDelete}){
  const [qnaModal,setQnaModal]=useState(false);
  const modalBtn = ()=>{
    setQnaModal(!qnaModal)
  }
  return(
    <div className="qna-list">
      <ul className="qna-card">
      <li key={qnaData.id}>
        <div className="qna-title"
        onClick={modalBtn}>
          <p className="qna-title-area">{qnaData.title}</p>
          <p className="qna-date">{qnaData.createdAt}</p>
          </div>
          <div className="qna-text">
              {qnaModal == true &&
              <dl className="text-container">
              <dt className="qna-text-left">
                <p className="qna-user">
                  <AiOutlineUser style={{marginRight : "5px"}}/>
                  {qnaData.account}</p>
                <p className="qna-content">{qnaData.content}</p>
              </dt>
              <dd className="qna-text-right">
              <button 
              className="qna-text-right button"
              key={addDelete.id}
              onClick={() => addDelete(qnaData.id)}
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
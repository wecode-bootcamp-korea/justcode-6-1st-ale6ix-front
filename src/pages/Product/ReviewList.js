import { useState } from 'react';
import './ReviewList.scss';

function ReviewList({list,deleteBtn}){
  const [modal,setModal] = useState(false);
  const modalEvent = ()=>{
    setModal(!modal)
  }
  // console.log(list);
  
    
  return (
    <div className="review-list-container">
      <ul className="review-card">
        <li key={list.id}>
            <div className="review-title"
            onClick={modalEvent}>
            <p>{list.title} </p>
            <p className="review-date">{list.createdAt}</p>
            <button
              key={deleteBtn.id}
              onClick={() => deleteBtn()}
              className="add-btn"
              >삭제</button>
            </div>
            <div className="review-text">
              {modal == true &&
              <dl className="text-container">
              <dt className="review-user">
                <span>{list.account}</span>
              </dt>
              <dd className="review-content">{list.content}</dd>
            </dl>
              }
              
            </div>
              
            
          </li>
      </ul>
    </div>
  )
}
export default ReviewList;
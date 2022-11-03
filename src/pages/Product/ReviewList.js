import { useState } from "react";
import "./ReviewList.scss";
import { AiOutlineUser } from "react-icons/ai";

function ReviewList({ list, deleteBtn }) {
  const [modal, setModal] = useState(false);
  const modalEvent = () => {
    setModal(!modal);
  };
  return (
    <div className="review-list-container">
      <ul className="review-card">
        <li key={list.id}>
          <div className="review-title" onClick={modalEvent}>
            <p className="review-title-area">{list.title} </p>
            <p className="review-date">{list.createdAt}</p>
          </div>
          <div className="review-text">
            {modal == true && (
              <dl className="text-container">
                <dt className="review-text-left">
                  <p className="review-user">
                    <AiOutlineUser style={{ marginRight: "5px" }} />
                    {list.account}
                  </p>
                  <p className="review-content">{list.content}</p>
                </dt>
                <dd className="review-text-right">
                  <button
                    key={deleteBtn.id}
                    onClick={() => deleteBtn(list.review_id)}
                  >
                    삭제
                  </button>
                </dd>
              </dl>
            )}
          </div>
        </li>
      </ul>
    </div>
  );
}
export default ReviewList;

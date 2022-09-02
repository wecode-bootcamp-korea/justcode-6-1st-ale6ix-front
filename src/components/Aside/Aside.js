import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import './Aside.scss';

function Aside(){
  return(
    <div className="aside-container">
      
      <div className="scroll-btn">
        <ul>
          <li className="scroll-btn-top">
            <BsChevronUp 
            className="aside-btn"
            /></li>
          <li className="scroll-btn-bottom">
            <BsChevronDown 
            className="aside-btn"
            /></li>
        </ul>
      </div>
    </div>
  )
}
export default Aside;
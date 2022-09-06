import "./SubNav.scss";
import { NavLink } from "react-router-dom";

function SubNav({ largeCateId, sublist }) {
  return (
    <div className="sub-nav">
      <ul className="sub-menu">
        {sublist.map((subNav) => {
          return (
            <NavLink
              to={"/product/" + largeCateId + "/" + subNav.smallCategoryId}
              key={subNav.smallCategoryId}
            >
              <li>{subNav.smallCategoryName}</li>
            </NavLink>
          );
        })}
      </ul>
      <div className="sub-menu-img">
        <img
          src="http://alessi.co.kr/_dj/img/category_item_img_1.jpg"
          alt="img"
        ></img>
      </div>
    </div>
  );
}
export default SubNav;

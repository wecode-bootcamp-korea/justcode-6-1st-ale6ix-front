import React, { useEffect, useState } from "react";
<<<<<<< HEAD

import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
=======
import { NavLink } from "react-router-dom";
>>>>>>> main
import "./Header.scss";
import SubNav from "./SubNav";
import Logout from "../../pages/Logout/Logout";

function Header() {
  const navigate = useNavigate();
  const [nav, setNav] = useState([]);
  const [onLogin, setOnLogin] = useState(false);
  const [log, setLog] = useState("LOGIN");
  const [userInfo, setUserInfo] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/users/me", {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.message === "success_getUser") {
          setOnLogin(true);
          setUserInfo(result.user.account);
        } else {
        }
      });
  }, []);

  useEffect(() => {
    fetch("/data/navCategories.json")
      .then((res) => res.json())
      .then((data) => {
        setNav(data.categoryData);
      });
  }, []);

  return (
    <div className="container">
      <div>
        <ul className="nav-top">
          <li className="nav-top-menu">
            <button className="nav-top-font"></button>
          </li>
          <li className="nav-top-menu">
            <Link to="/signup" className="nav-top-font">
              JOIN
            </Link>
          </li>
          <li className="nav-top-menu">
            <a href="#" className="nav-top-font">
              CART <span className="counter">0</span>
            </a>
          </li>
          <li className="nav-top-menu">
            <a href="#" className="nav-top-font"></a>
          </li>
          <li>
            <button>
              <a href="#">
                <img
                  src="http://alessi.co.kr/_dj/img/top_r_menu_icon_03_b.png"
                  alt="검색"
                />
              </a>
            </button>
          </li>
        </ul>
      </div>
      <div className="nav-bottom">
        <Link to="/main" className="alesix">
          ALE6IX
        </Link>
        <ul className="nav-menu">
          <li>
            <a href="#" className="nav-font">
              ABOUT
            </a>
          </li>
          <li>
            <a href="#" className="nav-font">
              STORE
            </a>
          </li>
          {nav.map((navlist) => {
            return (
              <NavLink
                to={"/product/" + navlist.LargeCategoryId}
                key={navlist.LargeCategoryId}
              >
                <li className="data-nav">
                  {navlist.LargeCategoryName}
                  <div className="sub-nav-pop">
                    <SubNav
                      largeCateId={navlist.LargeCategoryId}
                      sublist={navlist.smallCategories}
                    />
                  </div>
                </li>
              </NavLink>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;

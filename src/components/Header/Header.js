import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Header.scss";
import SubNav from "./SubNav";

function Header() {
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState();
  const [nav, setNav] = useState([]);

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
          setUserInfo(result.user.account);
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

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogOut = () => {
    localStorage.removeItem("token");
    navigate("/main");
  };

  return (
    <div className="container">
      <div>
        <ul className="nav-top">
          <li className="nav-top-menu">
            {localStorage.getItem("token") ? (
              <button className="log-btn" onClick={handleLogOut}>
                LOGOUT
              </button>
            ) : (
              <button className="log-btn" onClick={handleLogin}>
                LOGIN
              </button>
            )}
          </li>
          <li className="nav-top-menu">
            <Link to="/signup" className="nav-top-font">
              JOIN
            </Link>
          </li>
          <li className="nav-top-menu">
            <Link to="/carts" className="nav-top-font">
              CART
            </Link>
          </li>
          <li className="nav-top-menu">
            {localStorage.getItem("token") && (
              <span className="nav-top-font">{userInfo}</span>
            )}
          </li>
          <li>
            <button className="search">
              <Link to="/search">
                <img
                  src="http://alessi.co.kr/_dj/img/top_r_menu_icon_03_b.png"
                  alt="검색"
                />
              </Link>
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
              <li key={navlist.LargeCategoryId} className="data-nav">
                <NavLink to={"/product/" + navlist.LargeCategoryId}>
                  {navlist.LargeCategoryName}
                  <div className="sub-nav-pop">
                    <SubNav
                      largeCateId={navlist.LargeCategoryId}
                      sublist={navlist.smallCategories}
                    />
                  </div>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Header;

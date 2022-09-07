import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Logout({ userInfo, switchLog }) {
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.removeItem("token")) {
      navigate("/main");
      userInfo("");
      switchLog("LOGIN");
    }
  }, []);

  return <div>LOGOUT</div>;
}

export default Logout;

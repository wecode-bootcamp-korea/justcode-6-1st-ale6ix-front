import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home/Home";
import Login from "./Login/Login";
import Main from "./Main/Main";
import Signup from "./Signup/Signup";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

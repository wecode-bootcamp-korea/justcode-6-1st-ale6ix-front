import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Main from "./Main/Main";
import Signup from "./Signup/Signup";
import ProductBigCate from "./Product/ProductBigCate";
import ProductSmallCate from "./Product/ProductSmallCate";
import ProductDetail from "./Product/ProductDetail";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/main" element={<Main />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/product/:bigId" element={<ProductBigCate />} />
        <Route path="/product/:bigId/:smallId" element={<ProductSmallCate />} />
        <Route
          exact
          path="/product/detail/:productId"
          element={<ProductDetail />}
        />
      </Routes>
      <Aside />
      <Footer />
    </BrowserRouter>
  );
}

export default Router;

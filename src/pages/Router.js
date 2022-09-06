import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aside from "../components/Aside/Aside";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Cart from "./Cart/Cart";
import Login from "./Login/Login";
import Main from "./Main/Main";
import Search from "./Search/Search";
import Signup from "./Signup/Signup";
import SignupComplete from "./Signup/SignupComponents/SignupComplete";
import ProductBigCategory from "./Product/ProductBigCategory";
import ProductSmallCategory from "./Product/ProductSmallCategory";
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
        <Route path="/complete" element={<SignupComplete />} />
        <Route path="/carts" element={<Cart />} />
        <Route path="/product/:bigId" element={<ProductBigCategory />} />
        <Route
          path="/product/:bigId/:smallId"
          element={<ProductSmallCategory />}
        />
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

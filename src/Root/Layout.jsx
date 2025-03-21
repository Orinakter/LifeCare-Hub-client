import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/login" element={<Register></Register>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default Layout;

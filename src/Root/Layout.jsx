import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import FindDoctor from "../Pages/FindDoctor";

const Layout = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/register" element={<Register></Register>} />
          <Route path="/find-doctor" element={<FindDoctor></FindDoctor>} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default Layout;

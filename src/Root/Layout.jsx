import React from "react";
import { BrowserRouter, Route, Routes } from "react-router";

import Home from "../Pages/Home";
import Navbar from "../Components/Shared/Navbar";
import Footer from "../Components/Shared/Footer";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import FindDoctor from "../Pages/FindDoctor";
import AddDoctorForm from "../Pages/AddDoctorForm";
import Dashboard from "../Dashboard/Dashboard";
import ViewDetails from "../Pages/ViewDetails";
import BookAppointment from "../Pages/BookAppointment";
import MyAppointments from "../Pages/MyAppointments";
import AllDoctors from "../Pages/AllDoctors";
import AllAppointments from "../Pages/AllAppointments";
import DoctorEdit from "../Pages/DoctorEdit";
import Services from "../Pages/Services";
import AddServicesForm from "../Pages/AddServicesForm";
import PrivateRoute from "../Routes/PrivateRoute";

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
          <Route path="/view-details/:id" element={<PrivateRoute><ViewDetails></ViewDetails></PrivateRoute>} />
          <Route path="/book-appointment" element={<BookAppointment></BookAppointment>} />
          <Route path="/my-appointments" element={<PrivateRoute><MyAppointments></MyAppointments></PrivateRoute>} />
          <Route path="/services" element={<Services></Services>} />


          <Route path="/dashboard" element={<Dashboard></Dashboard>}>
            <Route
              path="add-doctor"
              element={<AddDoctorForm></AddDoctorForm>}
            />
            <Route
              path="all-doctors"
              element={<AllDoctors></AllDoctors>}
            />
             <Route
              path="all-appointments"
              element={<AllAppointments></AllAppointments>}
            />
            <Route
              path="doctor-edit/:id"
              element={<DoctorEdit></DoctorEdit>}
            />
            <Route
              path="add-services"
              element={<AddServicesForm></AddServicesForm>}
            />
          </Route>
          
          
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
};

export default Layout;

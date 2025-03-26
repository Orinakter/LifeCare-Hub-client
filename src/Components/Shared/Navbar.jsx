import React, { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { authContext } from "../../Context/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const {user,logOut} = useContext(authContext)
  const navigate = useNavigate()
  const logOutHandler = async()=>{
    await logOut()
    navigate("/");
    toast.success("logout Successfully")

  }
  const navLink = (
    <>
      <NavLink to="/">
        <li>Home</li>
      </NavLink>
      <NavLink to="/find-doctor">
        <li>Find Doctors</li>
      </NavLink>
      <NavLink>
        <li>Book Appointment</li>
      </NavLink>
      <NavLink to="/add-doctor">
        {" "}
        <li>Add Doctor</li>
      </NavLink>
      <NavLink>
        {" "}
        <li>My Appointments</li>
      </NavLink>
      <NavLink>
        <li>Medical Records</li>
      </NavLink>
    </>
  );
  return (
    <div>
      <div className="navbar bg-blue-50 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {navLink}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-[#0D92F4]">LifeCare Hub</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-4">{navLink}</ul>
        </div>
        <div className="navbar-end">
          {
            user ?  <div className="">
            <button 
          onClick={logOutHandler}
          className="btn bg-[#0D92F4] text-white">Logout</button>
          </div> :<Link to="/login">
            <button className="btn bg-[#0D92F4] text-white">Login</button>
          </Link>
          }
          
         
        </div>
      </div>
    </div>
  );
};

export default Navbar;

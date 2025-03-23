import Lottie from "lottie-react";
import React, { useContext, useState } from "react";
import loginLottieData from "../assets/lotties/login.json";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import LoginWithGoogle from "../Components/LoginWithGoogle";
import { authContext } from "../Context/AuthProvider";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage,setErrorMessage] = useState("");
  const {loginUser} = useContext(authContext)
  const navigate = useNavigate()
  const loginHandler = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    await loginUser(email, password);
    navigate("/");
        toast.success("User login Successfully");

  }
   
    

  return (
    <div className="p-12">
      <div className=" flex  items-center justify-center mt-12">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col lg:flex-row overflow-hidden">
          <div className="lg:w-1/2 p-10">
            <h2 className="text-2xl text-[#0D92F4] text-center font-bold mb-4">
              Welcome to LifeCare Hub
            </h2>
            <Lottie animationData={loginLottieData}></Lottie>
          </div>
          <div className="lg:w-1/2 p-10">
            <h2 className="text-3xl font-bold mb-3 text-[#0D92F4] text-center">
              Log In your Account
            </h2>
            <form onSubmit={loginHandler}>
              <div className="form-control mt-2">
                <label className="flex justify-start items-center gap-2 mb-3 mt-4">
                  <span className="text-xl text-[#0D92F4]">
                    <MdOutlineMail />
                  </span>
                  <span className="text-[#0D92F4]">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div className="form-control">
                <label className="flex justify-start items-center gap-2 mb-3 mt-2">
                  <span className="text-xl text-[#0D92F4]">
                    <RiLockPasswordFill />
                  </span>
                  <span className="text-[#126e82]">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) =>setPassword(e.target.value)}
                  className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#126e82]"
                  required
                />

                <label className="label text-sm">
                  <a
                    href="#"
                    className="label-text-alt link link-hover text-[#0D92F4]"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className=" btn w-full bg-gradient-to-r from-[#0D92F4] to-blue-900 text-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300">
                  Login
                </button>
              </div>
            </form>
            <div className="form-control mt-6">
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </div>
            <div className="">
              <LoginWithGoogle></LoginWithGoogle>
            </div>

            <p className="text-center text-sm  mt-4">
              Don't have an Account?
              <Link to="/register">
                <span className="text-[#0D92F4] hover:underline font-semibold">
                  Register Now
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

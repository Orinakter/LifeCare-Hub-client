import Lottie from 'lottie-react';
import React from 'react';
import loginLottieData from '../assets/lotties/login.json'
import { MdOutlineMail } from 'react-icons/md';
import { RiLockPasswordFill } from 'react-icons/ri';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router';


const Login = () => {
    return (
        <div className='p-12'>
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
            <form>
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
                  name="email"
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
                  name="password"
                  className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#126e82]"
                  required
                />

                <label className="label text-xl">
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

            <div class="flex items-center my-6">
              <hr class="flex-grow border-gray-300" />
              <span class="px-4 text-gray-500 text-sm">Or, Login with</span>
              <hr class="flex-grow border-gray-300" />
            </div>

            <div className="text-center flex items-center gap-3">
              <button
                
                className="btn w-full bg-white py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition duration-300"
              >
                <span className="text-2xl">
                  <FcGoogle />
                </span>
                Login with Google
              </button>
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
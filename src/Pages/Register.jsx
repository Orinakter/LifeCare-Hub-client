import Lottie from "lottie-react";

import registerLottiesData from "../assets/lotties/register.json";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link, useNavigate } from "react-router";
import { IoIosContact, IoIosPhotos } from "react-icons/io";
import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { authContext } from "./../Context/AuthProvider";
import LoginWithGoogle from "../Components/LoginWithGoogle";

const Register = () => {
  const { registerUser, userProfileUpdate} = useContext(authContext);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const registerFormHandler = async (e) => {
    e.preventDefault();

    setErrorMessage("");

    const lowercaseRegex = /^(?=.*[a-z]).+$/;
    if (!lowercaseRegex.test(password)) {
      toast.error("You Should need one Lowercase");
      return;
    }
    const uppercaseRegex = /^(?=.*[A-Z]).+$/;
    if (!uppercaseRegex.test(password)) {
      toast.error("You Should need one Uppercase");
      return;
    }

    if (password.length < 6) {
      toast.error("Password Should be 6 digit");
    }

    await registerUser(email, password);
    await userProfileUpdate(name, photo);

    navigate("/");
    toast.success("User Register Successfully");
  };

  return (
    <div className="p-12">
      <div className=" flex  items-center justify-center mt-12">
        <div className="bg-white rounded-lg shadow-lg w-full max-w-4xl flex flex-col lg:flex-row overflow-hidden">
          <div className="lg:w-1/2 p-10">
            <h2 className="text-2xl text-[#0D92F4] text-center font-bold mb-16">
              Welcome to LifeCare Hub
            </h2>
            <Lottie animationData={registerLottiesData}></Lottie>
          </div>
          <div className="lg:w-1/2 p-10">
            <h2 className="text-3xl font-bold mb-3 text-[#0D92F4] text-center">
              Registration
            </h2>
            <form onSubmit={registerFormHandler}>
              <div className="form-control mt-2">
                <label className="flex justify-start items-center gap-2 mb-3 mt-4">
                  <span className="text-xl text-[#0D92F4]">
                    <IoIosContact />
                  </span>
                  <span className="text-[#0D92F4]">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="form-control mt-2">
                <label className="flex justify-start items-center gap-2 mb-3 mt-4">
                  <span className="text-xl text-[#0D92F4]">
                    <IoIosPhotos />
                  </span>
                  <span className="text-[#0D92F4]">PhotoUrl</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your Name"
                  value={photo}
                  onChange={(e) => setPhoto(e.target.value)}
                  className="input input-bordered w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
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
                  onChange={(e) => setPassword(e.target.value)}
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
                  Register
                </button>
              </div>
              <div className="form-control mt-6">
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </div>
            </form>
            <div className="">
              <LoginWithGoogle></LoginWithGoogle>
            </div>
            <p className="text-center text-sm  mt-4">
              Don't have an Account?
              <Link to="/login">
                <span className="text-[#0D92F4] hover:underline font-semibold">
                  Login
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

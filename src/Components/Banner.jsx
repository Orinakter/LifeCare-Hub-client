import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div>
       <Carousel>
       <div
      className="relative w-full min-h-[70vh] h-screen flex items-center justify-center px-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url('https://i.ibb.co.com/m5ZG8PDX/pexels-gustavo-fring-3985163.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
       
        <div className="text-white">
          <h1 className="text-5xl font-bold">
            Modern Medical <span className="text-blue-500">Technology</span>
          </h1>
          <p className="mt-4 text-lg">
            Synergistically facilitate e-business users whereas web-enabled ROI.
            Objectively empower front-end potentialities before collaborative
            platforms.
          </p>
          <Link to="/find-doctor">
          <button className="mt-6 px-6 py-3 bg-[#0D92F4] hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg">
            Book Appointments
          </button>
          </Link>
          
        </div>

      
        <div className="relative">
          <img
            src="https://i.ibb.co.com/m5ZG8PDX/pexels-gustavo-fring-3985163.jpg"
            alt="Doctors"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute top-[-30px] left-[-30px] w-24 h-24"></div>
          <div className="absolute bottom-[-30px] right-[-30px] w-24 h-24"></div>
        </div>
      </div>
    </div>
    <div
      className="relative w-full h-screen flex items-center justify-center px-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url('https://i.ibb.co.com/sv3B6TRx/pexels-gustavo-fring-3985162.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
       
        <div className="text-white">
          <h1 className="text-5xl font-bold">
            Modern Medical <span className="text-blue-500">Technology</span>
          </h1>
          <p className="mt-4 text-lg">
            Synergistically facilitate e-business users whereas web-enabled ROI.
            Objectively empower front-end potentialities before collaborative
            platforms.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg">
            Book Appointments
          </button>
        </div>

      
        <div className="relative">
          <img
            src="https://i.ibb.co.com/sv3B6TRx/pexels-gustavo-fring-3985162.jpg"
            alt="Doctors"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute top-[-30px] left-[-30px] w-24 h-24"></div>
          <div className="absolute bottom-[-30px] right-[-30px] w-24 h-24"></div>
        </div>
      </div>
    </div>
    <div
      className="relative w-full h-screen flex items-center justify-center px-10"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.2)), url('https://i.ibb.co.com/CphZ5Km0/pexels-cottonbro-7578803.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
       
        <div className="text-white">
          <h1 className="text-5xl font-bold">
            Modern Medical <span className="text-blue-500">Technology</span>
          </h1>
          <p className="mt-4 text-lg">
            Synergistically facilitate e-business users whereas web-enabled ROI.
            Objectively empower front-end potentialities before collaborative
            platforms.
          </p>
          <button className="mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg shadow-lg">
            Book Appointments
          </button>
        </div>

      
        <div className="relative">
          <img
            src="https://i.ibb.co.com/CphZ5Km0/pexels-cottonbro-7578803.jpg"
            alt="Doctors"
            className="rounded-lg shadow-xl"
          />
          <div className="absolute top-[-30px] left-[-30px] w-24 h-24"></div>
          <div className="absolute bottom-[-30px] right-[-30px] w-24 h-24"></div>
        </div>
      </div>
    </div>
      </Carousel> 
       
    </div>
  );
};

export default Banner;

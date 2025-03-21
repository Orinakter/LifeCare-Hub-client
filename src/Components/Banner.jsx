import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (
    <div>
      <Carousel>
        <div>
          <div
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.5)),url("https://i.ibb.co.com/m5ZG8PDX/pexels-gustavo-fring-3985163.jpg")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            className="w-full h-[70vh] object-cover"
          >
            <div className="">
              <h2 className="text-5xl text-white font-bold">
              Your Health, Our Priority
              </h2>
              <p className="text-2xl text-white mt-8">
              Effortless appointment booking, doctor management, and secure medical records—all in one place.
              </p>
            </div>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co.com/p6MMj3yD/pexels-rdne-6129043.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="w-full h-[70vh] object-cover"
        >
          <div className="">
            <h2 className="text-5xl text-white font-bold">
            Your Health, Our Priority
            </h2>
            <p className="text-2xl text-white mt-8">
            Effortless appointment booking, doctor management, and secure medical records—all in one place.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage:
              'linear-gradient(rgba(0, 0, 0, 0.10), rgba(0, 0, 0, 0.5)), url("https://i.ibb.co.com/sdWMxWZ2/pexels-shkrabaanthony-5215004.jpg")',
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          className="w-full h-[70vh] object-cover"
        >
          <div className="">
            <h2 className="text-5xl text-white font-bold">
            Your Health, Our Priority
            </h2>
            <p className="text-2xl text-white mt-8">
            Effortless appointment booking, doctor management, and secure medical records—all in one place.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;

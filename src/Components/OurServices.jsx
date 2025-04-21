import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import useServices from "../Hooks/useServices";
import Loader from "../Components/Loader";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const OurServices = () => {
  const { services, isLoading } = useServices();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div>
      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <div className="container relative mx-auto mt-12">
            <h1 className="text-center text-4xl font-bold mb-8">Our Services</h1>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              navigation={{ nextEl: ".next", prevEl: ".prev" }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 10 },
                768: { slidesPerView: 3, spaceBetween: 10 },
                1024: { slidesPerView: 4, spaceBetween: 20 },
              }}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <div className="px-12">
                <div className="">
                  {services.map((item) => (
                    <SwiperSlide key={item._id}>
                      <div
                      onMouseEnter={() => setHoveredCard(item._id)}
                      onMouseLeave={() => setHoveredCard(null)}
                       className="relative group cursor-pointer">
                      
                        <div
                         
                          className="p-4 bg-white rounded shadow w-full h-full"
                        >
                          <img
                            src={item?.image}
                            alt=""
                            className="w-full h-[300px] object-cover rounded-md"
                          />
                          <h3 className="text-lg font-bold mt-2">{item?.category}</h3>
                          <p className="mt-2">{item?.description}</p>
                        </div>

                    
                        <div
                          className={`${
                            hoveredCard === item._id ? "flex" : "hidden"
                          } justify-center items-center w-full h-full z-10 absolute top-0 left-0 bg-[#01000342] rounded-md duration-500`}
                        >
                          <button className="btn bg-[#0D92F4] text-white font-bold rounded-xl">
                            View More
                          </button>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
              </div>
            </Swiper>
            <button className="px-1 next py-2 absolute z-40 top-[300px] -right-8 bg-[#0D92F4] text-white font-bold text-2xl">
              <IoIosArrowForward />
            </button>
            <button className="px-1 prev py-2 absolute z-40 top-[300px] -left-8 bg-[#0D92F4] text-white font-bold text-2xl">
              <IoIosArrowBack />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OurServices;
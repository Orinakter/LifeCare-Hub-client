import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import useServices from "../Hooks/useServices";
import Loader from "../Components/Loader";
import { FaHeartbeat } from "react-icons/fa";
import { BiSolidDonateBlood } from "react-icons/bi";
import { FaFirstAid } from "react-icons/fa";
import { MdSpatialAudioOff } from "react-icons/md";
import { useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const Services = () => {
  const { services, isLoading, refetch } = useServices();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center gap-8 p-12">
        <div className="">
          <img
            src="https://i.ibb.co.com/Kj4cCjYh/doctor.png"
            alt=""
            className="w-[400px] h-full"
          />
        </div>
        <div className="">
          <h1 className="font-bold text-2xl mb-12">
            LifeCareHUb Specialist hearing services are provided
          </h1>
          <div className="flex items-center  gap-6">
            {/* icon */}
            <div className="text-3xl text-blue-500">
              <FaHeartbeat />
            </div>
            {/* text */}
            <div className="">
              <h3 className="font-semibold text-lg mb-2">
                Hearing Tests & Aids
              </h3>
              <p className="">
                Hearing tests check hearing ability; hearing aids enhance sound
                clarity and improve overall communication quality.
              </p>
              <div className="divider"></div>
            </div>
          </div>
          <div className="flex items-center  gap-6">
            {/* icon */}
            <div className="text-3xl text-blue-500">
              <MdSpatialAudioOff />
            </div>
            {/* text */}
            <div className="">
              <h3 className="font-semibold text-lg mb-2">
                Paediatric & Adult Audiology
              </h3>
              <p className="">
                Paediatric and adult audiology diagnose and manage hearing
                issues across all ages with personalized care.
              </p>
              <div className="divider"></div>
            </div>
          </div>
          <div className="flex items-center  gap-6">
            {/* icon */}
            <div className="text-3xl text-blue-500">
              <FaFirstAid />
            </div>
            {/* text */}
            <div className="">
              <h3 className="font-semibold text-lg mb-2">
                Provision & Servicing of Hearing Instruments
              </h3>
              <p className="">
                Provision and servicing of hearing instruments ensure optimal
                performance, comfort, and longevity for users' hearing needs.
              </p>
              <div className="divider"></div>
            </div>
          </div>
          <div className="flex items-center  gap-6">
            {/* icon */}
            <div className="text-3xl text-blue-500">
              <BiSolidDonateBlood />
            </div>
            {/* text */}
            <div className="">
              <h3 className="font-semibold text-lg mb-2">
                Good Health Habits Can Help Stop Germs
              </h3>
              <p className="">
                Good health habits like handwashing, covering coughs, and
                staying home when sick help stop germs spreading.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="">
          {isLoading ? (
            <Loader />
          ) : (
            <div className="container relative mx-auto mt-12">
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
                          className="relative group cursor-pointer"
                        >
                          <div className="p-4 bg-white rounded shadow w-full h-full">
                            <img
                              src={item?.image}
                              alt=""
                              className="w-full h-[300px] object-cover rounded-md"
                            />
                            <h3 className="text-lg font-bold mt-2">
                              {item?.category}
                            </h3>
                            <p className="mt-2">{item?.description}</p>
                            <div className="flex justify-center items-center mt-8">
                              <button className="btn bg-[#0D92F4] text-white font-bold">
                                View More
                              </button>
                            </div>
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
    </div>
  );
};

export default Services;

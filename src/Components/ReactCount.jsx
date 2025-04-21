import React from 'react';
import { FaUserDoctor } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { FaAward } from "react-icons/fa";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import CountUp from "react-countup";





const ReactCount = () => {
    const onStart = () => {
        console.log("Started! 💨");
      };

    return (

        
        <div className="">
             <CountUp
      className="account-balance"
      start={0}
      end={49500000}
      duration={1}
      useEasing={true}
      separator=","
    />
            <div className="bg-blue-100 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-center">
        <div className="flex flex-col items-center">
          <div className="text-[#0D92F4] text-5xl mb-4">
          <FaUserDoctor />
          </div>
          <h2 className="text-4xl font-bold text-[#0D92F4]">50</h2>
          <p className="mt-2 text-black font-semibold">Medical Experts</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-[#0D92F4] text-5xl mb-4">
          <MdOutlineBedroomParent />
          </div>
          <h2 className="text-4xl font-bold text-[#0D92F4]">300</h2>
          <p className="mt-2 text-black font-semibold">Hospital Rooms</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-[#0D92F4] text-5xl mb-4">
          <FaAward />
          </div>
          <h2 className="text-4xl font-bold text-[#0D92F4]">500</h2>
          <p className="mt-2 text-black font-semibold">Awards Won</p>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-[#0D92F4] text-5xl mb-4">
          <HiOutlineEmojiHappy />
          </div>
          <h2 className="text-4xl font-bold text-[#0D92F4]">5000</h2>
          <p className="mt-2 text-black font-semibold">Happy Patients</p>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ReactCount;
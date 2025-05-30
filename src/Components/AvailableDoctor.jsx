import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const AvailableDoctor = () => {
  const [doctor, setDoctor] = useState([]);

  useEffect(() => {
    const doctor = async () => {
      const res = await axios.get(`http://localhost:5000/available-doctor`);
      setDoctor(res.data);
    };
    doctor();
  }, []);

  return (
    <div className="p-12">
      <h1 className="text-center text-4xl font-bold mb-8">Available Doctor</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 rounded-xl">
        {doctor.map((item) => (
          <div
            key={item.id}
            className=" flex flex-col border-2 border-gray-100 p-6 group"
          >
            <div className="flex-1">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item?.image}
                  alt=""
                  className="w-[300px] h-[250px] object-cover rounded-xl group-hover:scale-110 duration-500"
                />
              </div>
              <div className="group-hover:scale-90 duration-500 text-center">
              <h2 className="mt-4 font-bold "> {item?.doctorName}</h2>
              <p className="">{item?.specialization}</p>

              <p className=""> {item?.fees}</p>
              </div>
            </div>

            <div className="flex justify-center items-center mt-8">
              <Link to={`/view-details/${item?._id}`}>
                <button className="btn bg-[#0D92F4] text-white">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableDoctor;

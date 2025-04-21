import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Link } from "react-router";
import useAxiosPublic from "../Hooks/useAxiosPublic";

const AvailableDoctor = () => {
  const [specialization, setSpecialization] = useState("");
  const [search, setSearch] = useState("");
  const publicUrl = useAxiosPublic()

  const {
    isLoading,
    refetch,
    data: allDoctor,
  } = useQuery({
    queryKey: ["allDoctor",specialization,search],
    queryFn: async () => {
    //   const res = await axios.get(`http://localhost:5000/all-doctor?category=${specialization}&&search=${search}`);
      const res = await publicUrl.get(`/all-doctor?category=${specialization}&&search=${search}`);
      return res.data;
    },
  });

  return (
    <div className="">
      <div className="px-4 py-4">
        <h1 className="text-center text-4xl font-bold mb-6">
          Available Doctor
        </h1>
        <div className="flex justify-between items-center p-2 bg-blue-100 mb-8">
          <div className=""></div>
          <input
            onChange={(e) => setSearch(e.target.value)}
            type="text"
            placeholder="Search here"
            className="input"
          />
          <div className="">
            <select
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full p-3 border rounded-md bg-white"
            >
              <option value="">All</option>
              <option value="Cardiologist">Cardiologist</option>
              <option value="Dermatologist">Dermatologist</option>
              <option value="Neurologist">Neurologist</option>
              <option value="Pediatrician">Pediatrician</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 rounded-xl">
          {allDoctor?.map((item) => (
            <div
              key={item?._id}
              className=" flex flex-col border-2 border-gray-100 p-12"
            >
              <div className="flex-1">
                <img
                  src={item?.image}
                  alt=""
                  className="w-[300px] h-[250px] object-cover rounded-xl"
                />
                <h2 className="mt-4">
                  <span className="font-semibold">Name:</span>{" "}
                  {item?.doctorName}
                </h2>
                <p className="">
                  <span className="font-semibold">Specialization:</span>{" "}
                  {item?.specialization}
                </p>
                <p className="">
                  <span className="font-semibold">Experience:</span>{" "}
                  {item?.experience}
                </p>
                <p className="">
                  <span className="font-semibold">AvailableDays:</span>{" "}
                  {item?.availableDays}
                </p>
                <p className="">
                  <span className="font-semibold">Time:</span> {item?.time}
                </p>
                <p className="">
                  <span className="font-semibold">City:</span> {item?.city}
                </p>
                <p className="">
                  <span className="font-semibold">Location:</span>{" "}
                  {item?.location}
                </p>
                <p className="">
                  <span className="font-semibold">Rating:</span> {item?.rating}
                </p>
                <p className="">
                  <span className="font-semibold">Fees:</span> {item?.fees}
                </p>
              </div>

              <div className="flex justify-center items-center mt-8">
                <Link to={`/view-details/${item?._id}`}>
                  <button className="btn bg-[#0D92F4] text-white">
                    Doctor Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailableDoctor;
